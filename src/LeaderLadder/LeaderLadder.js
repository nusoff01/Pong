import React from 'react';
import './LeaderLadder.css';
import { createPlayers } from '../Utils';
import * as d3 from 'd3';

const matchesLink = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSBuLnOBXaX9mXTc08tcMnH5eLxt8VuLGf4a0SGouikhwKnfUxp6Kjo0hYa3QONBjfSS-oAEiL3TXX9/pub?gid=0&single=true&output=csv'

class LeaderLadder extends React.Component {
    constructor () {
        super();
        // this.state = {
        //     matches: null
        // }
    }

    // componentDidMount () {
    //     d3.csv(matchesLink).then((matches) => {
    //         this.setState({matches: matches})
    //     });
    // }

    render () {
        // console.log(Utils.createPlayers(['Irem', 'Ben', 'Nick', 'Matt']));
        let players = createPlayers(this.props.players, this.props.matches);
        return (
            <div className="leaderLadder">
                <div className="leaderLadderHeader">
                    Leader Ladder
                </div>
                <table><tbody>
                    <tr className="headerRow">
                        <th></th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Record</th>
                    </tr>
                    {players.map((playerObject, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{playerObject.name}</td>
                            <td>{Math.round(playerObject.ELO)}</td>
                            <td>{playerObject.wins + ' - ' + playerObject.losses}</td>
                    </tr>)}
                </tbody></table>
            </div>
        );
    }
}

export default LeaderLadder;