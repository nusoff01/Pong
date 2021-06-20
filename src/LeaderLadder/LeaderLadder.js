import React from 'react';
import './LeaderLadder.css';
import { createPlayers } from '../Utils';
import * as d3 from 'd3';
import PlayerProfile from '../PlayerProfile/PlayerProfile';

const matchesLink = 'https://docs.google.com/spreadsheets/d/1sF6K5eoTMGjo07zJKPZMnWw_B3yIk6WU5F6Ud56PVTs/edit?usp=sharing'

class LeaderLadder extends React.Component {
    constructor () {
        super();
        this.state = {
            selectedPlayer: null,
            players: []
        }
    }

    componentDidUpdate (prevProps) {
        if (prevProps.players !== this.props.players || prevProps.matches !== this.props.matches) {
            let players = createPlayers(this.props.players, this.props.matches);

            if (players.length) {
                this.setState({players: players, selectedPlayer: players[0]});
            }    
        }
    }

    render () {
        return (
            <div className="leaderLadder">
                {this.state.selectedPlayer !== null ? <PlayerProfile player={this.state.selectedPlayer} /> : ''}
                <div className="ladder">
                    <div className="leaderLadderHeader">
                        Leader Ladder
                    </div>
                    <table className='leadersTable'><tbody>
                        <tr className="headerRow">
                            <th></th>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Record</th>
                        </tr>
                        {this.state.players.map((playerObject, index) =>
                            <tr key={index} className={this.state.selectedPlayer.name === playerObject.name ? 'selectedPlayer' : ''} onClick={() => this.setState({selectedPlayer: playerObject})}>
                                <td>{index + 1}</td>
                                <td >{playerObject.name}</td>
                                <td>{Math.round(playerObject.ELO)}</td>
                                <td>{playerObject.wins + ' - ' + playerObject.losses}</td>
                        </tr>)}
                    </tbody></table>
                </div>
            </div>
        );
    }
}

export default LeaderLadder;