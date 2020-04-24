import React, { Component } from 'react'
import { Spinner } from '@wordpress/components'

export class GetMoreBtn extends Component {
    render() {
        const { inProgress, dataStatus, loadFunc } = this.props;

        if (inProgress) {
            return (<div className="terms-tab-spinner"><Spinner /></div>)
        } else if (dataStatus !== undefined && dataStatus <= 1) {
            return (
                <div className="get-data-button">
                    <button onClick={loadFunc}>Загрузить еще</button>
                </div>
            )
        }

        return null;
    }
}
