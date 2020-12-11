import React from 'react';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editPost';
import { registerPlugin } from '@wordpress/plugins';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { GetData } from './Data/GetData';
import LinksList from './Tab_Links/LinksList';
import TermsList from './Tab_Terms/TermsList';
import { FiltersPanel } from './Tab_Links/Filters/FiltersPanel';
import { TabsPanel } from './TabsPanel';
import { GetAllTerms } from "./Data/GetAllTerms";
import { GetArticleStats } from './Data/GetArticleStats';
import { StatsTab } from './Tab_Stats/StatsTab';
import { SuggestionsPanel } from './Suggestions/SugestionsPanel';
import BlockLinks from './Tab_BlockLinks/BlockLinksPanel';
import { GetIncomingLinks } from './Data/GetIncomingLinks';
import Icons from './Icons';
import "./Wrapper.css";
import { GetMoreBtn } from './GetMoreBtn';


class CherryLinkSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentData: {
                dataOffset: 0,
                data: [],
                loadLimit: parseInt(cherrylink_options['get_data_limit']),
                dataStatus: 0, // 0: first render; 1: success; 2: end reached; 3: not found
                inProgress: false,
                loadFunc: () => {}
            },
            currentTab: 'tab1',
            currentTerms: [],
            currentFilters: {
                textFilter: '',
                showUsed: true,
                showNotUsed: true,
                checkedCategories: []
            },
            articleStats: [],
            incomingLinks: {},
            suggestionsData: false,
            scrollPos: false,
        }
        this.updateLinksData = this.updateLinksData.bind(this);
        this.changeTab = this.changeTab.bind(this)
        this.updateTermsData = this.updateTermsData.bind(this)
        this.updateCurrentFilters = this.updateCurrentFilters.bind(this);
        this.updateArticleStats = this.updateArticleStats.bind(this);
        this.updateIncomingLinks = this.updateIncomingLinks.bind(this);
        this.updateSuggestions = this.updateSuggestions.bind(this);
        this.updateScrollPos = this.updateScrollPos.bind(this);
    }

    updateLinksData(newData) {
        this.setState((prevState) => ({
            ...prevState,
            currentData: newData
        }))
    }

    updateTermsData(termsList) {
        this.setState((prevState) => ({
            ...prevState,
            currentTerms: termsList
        }))
    }

    updateCurrentFilters(filters) {
        this.setState((prevState) => ({
            ...prevState,
            currentFilters: filters
        }))
    }

    updateArticleStats(stats) {
        this.setState((prevState) => ({
            ...prevState,
            articleStats: stats
        }))
    }

    updateIncomingLinks(incoming) {
        this.setState((prevState) => ({
            ...prevState,
            incomingLinks: incoming
        }))
    }

    updateSuggestions(sugg, scrollPos = false) {
        this.setState((prevState) => ({
            ...prevState,
            suggestionsData: sugg
        }))

        if (scrollPos) {
            this.updateScrollPos(scrollPos);
        }
    }

    updateScrollPos(scrollPos) {
        this.setState((prevState) => ({
            ...prevState,
            scrollPos
        }))
    }

    changeTab(tabName) {
        this.setState((prevState) => ({
            ...prevState,
            tabName: tabName
        }))
    }

    fcl_convertRelativeUrl(url) {
        if (url.indexOf("http") !== -1)
            return url;

        let host = location.host;
        let proto = location.protocol;

        if (url.length > 0) {
            if (url.indexOf(host) === -1) {
                url = "//" + host + url;
            }
            if (url.indexOf(proto) === -1) {
                url = proto + url;
            }
        }

        return url;
    }

    render() {
        const tabToRender = this.state.tabName;
        const { suggestionsData } = this.state;

        let renderPanel;

        if (suggestionsData) {
            // show suggestions panel if corresponding state exists
            renderPanel = <SuggestionsPanel suggestionsData={suggestionsData} 
                                    toggleSuggestionsPanel={this.updateSuggestions} 
                                    stats={this.state.articleStats}
                                    convertUrl={this.fcl_convertRelativeUrl} />;
        } else {
            // show tabs/links
            renderPanel =
                <div>
                    <TabsPanel onChange={this.changeTab} />
                    {(!tabToRender || tabToRender === 'tab-links') && (
                        <div>
                            <FiltersPanel currentData={this.state.currentData}
                                currentFilters={this.state.currentFilters}
                                currentTerms={this.state.currentTerms}
                                handleDataUpdate={this.updateLinksData}
                                handleFiltersUpdate={this.updateCurrentFilters} />
                            <LinksList data={this.state.currentData.data}
                                dataStatus={this.state.currentData.dataStatus}
                                scrollPos={this.state.scrollPos}
                                updateScrollPos={this.updateScrollPos}
                                filters={this.state.currentFilters}
                                stats={this.state.articleStats}
                                convertUrl={this.fcl_convertRelativeUrl}
                                showSuggestions={this.updateSuggestions}
                                blockLinks={this.state.blockLinks} />
                            <GetMoreBtn {...this.state.currentData } />
                        </div>
                    )
                    }
                    {tabToRender === 'tab-tax' &&
                        (
                            <TermsList terms={this.state.currentTerms}
                                convertUrl={this.fcl_convertRelativeUrl}
                                stats={this.state.articleStats} />
                        )
                    }
                    {tabToRender === 'tab-stats' &&
                        (<StatsTab stats={this.state.articleStats} incoming={this.state.incomingLinks} />)
                    }
                    {tabToRender === 'tab-block' &&
                        (<BlockLinks />)
                    }
                </div>;
        }

        return (
            <Fragment>
                <PluginSidebarMoreMenuItem target="cherrylink-sidebar">
                    {__("CherryLink", "cherrylink")}
                </PluginSidebarMoreMenuItem>
                <PluginSidebar
                    name="cherrylink-sidebar"
                    title={__("CherryLink", "cherrylink")}
                >
                    {/* <NoticeContext.Provider value={this.updateNotice}> */}
                        <GetData onDataChange={this.updateLinksData} currentData={this.state.currentData} />
                        <GetArticleStats onChange={this.updateArticleStats} convertUrl={this.fcl_convertRelativeUrl} />
                        <GetAllTerms onTermsChange={this.updateTermsData} currentTerms={this.state.currentTerms} />
                        <GetIncomingLinks onChange={this.updateIncomingLinks} />
                        {renderPanel}
                        
                    {/* </NoticeContext.Provider> */}
                </PluginSidebar>
            </Fragment>
        );
    }
}

const RegisterCherryLinkSidebar = () => {

    registerPlugin("cherrylink-sidebar", {
        icon: Icons.main,
        render: CherryLinkSidebar
    });

}

export default RegisterCherryLinkSidebar