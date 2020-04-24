import {Button} from '@wordpress/components'
import React, { Component } from 'react'
import LinkWithInsertAction from '../HOC/withLinkInsert'

class SuggestionCopy extends Component {
    render() {
        const {copyLink, url} = this.props;
        return (
            <Button
                className=""
                isSecondary
                onClick={() => copyLink(url)}>Скопировать ссылку</Button>
        )
    }
}
// SuggestionInsert.contextType = NoticeContext;
export default LinkWithInsertAction(SuggestionCopy);