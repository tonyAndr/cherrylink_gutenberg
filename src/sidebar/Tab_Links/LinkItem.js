import React from 'react';
import LinkWithInsertAction from '../HOC/withLinkInsert';
import { showNotice } from '../Notices';

class LinkItem extends React.Component {

    constructor(props) {
        super(props);

    }

    findSuggestions(sugg) {
        const { showSuggestions, linkObj } = this.props;

        // Saving scroll position of links list to be able to return 
        // to the same place after suggestions will be closed
        const scrollPos = document.querySelector(".edit-post-sidebar").scrollTop;

        showSuggestions({ rawKeywords: sugg, linkItem: linkObj }, scrollPos);
    }


    decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    render() {

        const { linkObj, editUrl, clickHandler, copyLink, postMeta, inArticle, changeBlockLinks, onMetaChange } = this.props;
        const postId = linkObj["data-postid"],
            url = linkObj["data-url"],
            title = cherrylink_options.templates.isH1 === "true" ? this.decodeHtml(linkObj["data-title"]) : this.decodeHtml(linkObj["data-titleseo"]),
            incoming = linkObj["data-incoming"],
            outgoing = linkObj["data-outgoing"],
            sugg = linkObj["data-suggestions"];

        let inBlock = false;

        postMeta.blockLinks.forEach(element => {
            if (element.post_id === postId) {
                inBlock = true;
            }
        });

        const containerClass = inArticle ? `link-item-container insert-allowed inArticle` : "link-item-container insert-allowed";

        return (
            <div onMouseDown={clickHandler} className={containerClass}>
                <span>{title}</span>
                <div className='link-toolbar-overlay  insert-allowed'>
                    <div className='toolbar-actions'>
                        <div className="insert-allowed">
                            <img className="insert-allowed" src="/wp-content/plugins/cherrylink/assets/gutenberg/insert_link.png" title="Вставить ссылку" alt="" />
                        </div>
                        <div onMouseDown={(e) => {
                            e.stopPropagation();
                            this.findSuggestions(sugg)
                        }}>
                            <img src="/wp-content/plugins/cherrylink/assets/gutenberg/find_suggestions.png" title="Найти подсказки" alt="Подсказки" />
                        </div>
                        <div onMouseDown={() => changeBlockLinks(postId, title, postMeta, onMetaChange)}>
                            <img src={inBlock ? "/wp-content/plugins/cherrylink/assets/gutenberg/del_from_block2.png" :
                                "/wp-content/plugins/cherrylink/assets/gutenberg/add_to_block2.png"}
                                title={inBlock ? "Убрать из блока ссылок" : "Добавить в блок ссылок"} alt="" />
                        </div>
                    </div>
                    <div className='toolbar-article'>
                        <div onMouseDown={() => copyLink(url)}><img src="/wp-content/plugins/cherrylink/assets/gutenberg/copy_link.png" title="Копировать ссылку" alt="" /></div>
                        <div><a target='_blank' href={url}><img src="/wp-content/plugins/cherrylink/assets/gutenberg/look_page.png" title="Просмотр статьи" alt="" /></a></div>
                        <div><a target='_blank' href={`${editUrl}?post=${postId}&action=edit`}><img src="/wp-content/plugins/cherrylink/assets/gutenberg/edit_page.png" title="Редактировать статью" alt="" /></a></div>
                    </div>
                    <div className='toolbar-stats'>
                        <div>
                            <div title='Исходящие ссылки'>🠅 {outgoing}</div><div title='Входящие ссылки'>🠇 {incoming}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LinkWithInsertAction(LinkItem);