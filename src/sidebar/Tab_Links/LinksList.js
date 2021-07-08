import React from 'react';
import './LinksToolbar.css';
import LinkItem from './LinkItem';
import withPostMeta from '../HOC/withPostMeta';
import { showNotice } from '../Notices';

class LinksList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blockLinks: [],
            manualEdit: false,
            showAfter: false,
            showAfterChanged: false
        };

        this.updateMetaState = this.updateMetaState.bind(this);
    }

    isInArticle(item, stats) {
        let inAricle = false;
        const convertedUrl = this.props.convertUrl(item['data-url']);
        for (let i in stats) {
            if (convertedUrl === stats[i].url) {
                inAricle = true;
                break;
            }
        }
        return inAricle;
    }

    shouldBeShown(item, filters, inAricle) {
        // const currData = this.props.currentData;
        
        let hasText, hasCategory, showToggles;

        if (!filters.textFilter || item['data-title'].indexOf(filters.textFilter) !== -1) {
            hasText = true;
        } else {
            hasText = false;
        }

        const itemCats = item['data-category'].split(",");
        const intersection = itemCats.filter(x => filters.checkedCategories.includes(x)).length > 0;
        if (filters.checkedCategories.length === 0 || intersection) {
            hasCategory = true;
        } else {
            hasCategory = false;
        }

        if ((inAricle && filters.showUsed) || (!inAricle && filters.showNotUsed)) {
            showToggles = true;
        } else {
            showToggles = false;
        }

        return hasText && hasCategory && showToggles;

    }
    updateMetaState(newState) {
        if (newState !== undefined) {
            this.props.updateMeta(newState);
            this.setState(prevState => (newState));
        } else {
            this.setState(prevState => {
                    const meta = this.props.getMeta()
                    return meta;
                }
                
            );
        }
    }

    componentDidMount() {
        this.updateMetaState();
    }

    componentDidUpdate(prevProps) {
        if (this.props.scrollPos) {
            document.querySelector(".edit-post-sidebar").scrollTop = this.props.scrollPos;
            this.props.updateScrollPos(0);
        }
    }

    render () {
        const { filters, data, stats, showSuggestions, convertUrl, dataStatus } = this.props;

        if (dataStatus === 3) {
            console.log('dataStatus = 3 in linksList');
            return (
                <p className='links-not-found'>Ничего не удалось найти. Попробуйте изменить настройки <a href={window.location.origin + "/wp-admin/options-general.php?page=linkate-posts"}>фильтрации или релевантности</a>.</p>
            )
        }


        const editUrl = `${window.location.origin}/wp-admin/post.php`;
        let links = [];
        if (data instanceof Array && data.length > 0) {
            links = data.map((x, index) => {
                // добавить фильтрацию
                const inAricle = this.isInArticle(x, stats);
                const isVisible = this.shouldBeShown(x, filters, inAricle);
                if (isVisible)
                    return (
                        <LinkItem key={'link_'+index} editUrl={editUrl} linkObj={x} showSuggestions={showSuggestions} inArticle={inAricle} postMeta={this.state} convertUrl={convertUrl} onMetaChange={this.updateMetaState}/>
                    )
            });
        }

        return (
            <div>
                {links}
            </div>
        )
        
    }

}

export default withPostMeta(LinksList);