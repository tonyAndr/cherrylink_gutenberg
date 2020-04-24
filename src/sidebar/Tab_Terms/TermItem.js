import React from 'react';
import LinkWithInsertAction from '../HOC/withLinkInsert';

class TermItem extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { isChild, inArticle, termName, termUrl, children, copyLink, clickHandler } = this.props;
        const className = isChild ? 'term-checkbox-child' : 'term-checkbox-toplvl';
        const containerClass = inArticle ? `term-item-container insert-allowed inArticle` : "term-item-container insert-allowed";
        return (
            <div className={className}>
                <div className={containerClass} onMouseDown={clickHandler}>
                    <span>{termName}</span>
                    <div className='term-toolbar-overlay insert-allowed'>
                        <div className='toolbar-actions insert-allowed'>
                            <div className=" insert-allowed">
                                <img className="insert-allowed" src="/wp-content/plugins/cherrylink/assets/gutenberg/insert_link.png" title="Вставить ссылку" alt="" />
                            </div>
                        </div>
                        <div className='toolbar-article'>
                            <div onMouseDown={() => copyLink(termUrl)}><img src="/wp-content/plugins/cherrylink/assets/gutenberg/copy_link.png" title="Копировать ссылку" alt="" /></div>
                            <div><a target='_blank' href={termUrl}><img src="/wp-content/plugins/cherrylink/assets/gutenberg/look_page.png" title="Просмотр Рубрики" alt="" /></a></div>
                        </div>
                    </div>
                </div>

                {children.length > 0 && children}
            </div>
        )
    }
}

export default LinkWithInsertAction(TermItem);