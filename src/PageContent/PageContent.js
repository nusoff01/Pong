import React from 'react';
import './PageContent.css';
import LeaderLadder from './../LeaderLadder/LeaderLadder.js';
import HomeContent from './../HomeContent/HomeContent.js';
import * as d3 from 'd3';

const matchesLink = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSBuLnOBXaX9mXTc08tcMnH5eLxt8VuLGf4a0SGouikhwKnfUxp6Kjo0hYa3QONBjfSS-oAEiL3TXX9/pub?gid=0&single=true&output=csv'
const localLink = 'matchHistory.csv';

class PageContent extends React.Component {

    constructor () {
        super();
        this.state = {
            matches: [],
            players: ['Irem', 'Nick', 'Matt', 'Karthik', 'Sandip', 'Sai', 'Ellick', 'Abinav']
        }
    }

    componentDidMount () {
        d3.csv(matchesLink).then((matches) => {
            this.setState({matches: matches});
        });
    }
   
    render () {
        return (
            <div className="pageContent">
                {this.getContent(this.props.path, this.props.params)}
            </div>  
        );
    }

    getContent (path = 'home', params = null) {
        if (path === 'home') {
            return (<div className="homePageLayout">
                {/* <HomeContent/> */}
                <LeaderLadder players={this.state.players} matches={this.state.matches}/>
            </div>);
        }
        return <div></div>
    }
}

export default PageContent;