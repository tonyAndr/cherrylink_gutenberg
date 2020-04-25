import React from 'react';
import { showNotice } from '../Notices';

export class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        if (this.props.currentData.data.length === 0)
            this.loadData();
    }

    loadData() {
        const {currentData, onDataChange: handleDataUpdate }  = this.props;
        // const handleDataUpdate = this.props.onDataChange;

        var this_id = cherrylink_options['post_id'].length == 0 || cherrylink_options['post_id'] == 0 ? window.location.href.match(/tag_ID=(\d+)\&/i)[1] : cherrylink_options['post_id'];
        const is_term = window.location.href.indexOf('term.php') > -1 ? 1 : 0;
        const url = ajax_var.url + '?action=getLinkateLinks'; // &post_id='+this_id+'&offset=0&is_term='+is_term
        var payload = {
            post_id: this_id,
            offset: currentData.dataOffset,
            is_term: is_term
        }

        const newData = {
            data: currentData.data,
            dataOffset: currentData.dataOffset,
            loadLimit: currentData.loadLimit,
            loadFunc: this.loadData,
            dataStatus: currentData.dataStatus,
            inProgress: true
        }

        // mark inProgress
        handleDataUpdate(newData);

        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(payload) // body data type must match "Content-Type" header
        })
            .then(response => response.json())
            .then(response => {
                if (response.count > -1) {
                    newData.data = newData.data.concat(JSON.parse(response.links));
                    newData.dataOffset = newData.dataOffset + response.count;
                }

                //dataStatus 0: first render; 1: success; 2: end reached; 3: not found
                if (response.count > 0 && response.count === newData.loadLimit) {
                    newData.dataStatus = 1;
                } else if (response.count === -1) {
                    newData.dataStatus = 3;
                } else if (response.count > 0 && response.count < newData.loadLimit) {
                    newData.dataStatus = 2;
                }
                
                if (newData.data.length > 0) {
                    this.getLinkStats(newData, handleDataUpdate);
                } else {
                    newData.inProgress = false;
                    handleDataUpdate(newData);
                }
            })
            .catch(error => {
                console.log(error)
                showNotice('Произошла ошибка при загрузке (подробности в консоли)')
                newData.inProgress = false;
                handleDataUpdate(newData);
            })
    }

    getLinkStats(currentData, updateCallback) {
        let ids = [];
        for (let i = 0; i < currentData.data.length; i++) {
            const element = currentData.data[i];
            if (element['data-incoming'] === undefined)
                ids.push(`'${element['data-postid']}'`);
        }

        // get stats
        const url = ajax_var.url + '?action=linkate_generate_csv_or_json_prettyfied';
        var payload = {
            'from_editor': true,
            'post_ids': ids.join(",")
        }

        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(payload) // body data type must match "Content-Type" header
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)

                const newData = currentData.data.map(obj => {
                    const key = `"id_${obj["data-postid"]}"`;
                    if (response[key] !== undefined) {
                        return { ...obj, "data-incoming": response[key][1], "data-outgoing": response[key][0] }
                    } else {
                        return obj;
                    }
                }
                    // response["id_"+obj["data-postid"]] !== undefined ? { ...obj, "data-incoming": response["id_"+obj["data-postid"]][1], "data-outgoing": response["id_"+obj["data-postid"]][0] } : 
                );
                currentData.data = newData;

                currentData.inProgress = false;
                updateCallback(currentData);
            })
            .catch(error => {
                console.log(error)
                currentData.inProgress = false;
                updateCallback(currentData);
                showNotice('Произошла ошибка при загрузке (подробности в консоли)');
            })


    }

    render() {
        return null;
    }
}
