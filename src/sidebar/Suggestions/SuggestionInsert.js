import {Button} from '@wordpress/components'
import React, { Component } from 'react'
import LinkWithInsertAction from '../HOC/withLinkInsert'

class SuggestionInsert extends Component {
    render() {
        const {clickHandler} = this.props;
        return (
            <Button
                className="insert-allowed"
                isSecondary
                onClick={clickHandler}>Вставить ссылку</Button>
        )
    }
}
// SuggestionInsert.contextType = NoticeContext;
export default LinkWithInsertAction(SuggestionInsert);