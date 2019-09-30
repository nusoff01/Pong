import React from 'react';
import './PlayerProfile.css';
import * as d3 from 'd3';

// props - players, matches, playerName

class PlayerProfile extends React.Component {
    constructor () {
        super();
    }

    getRecord () {
        return this.props.player.wins + '-' + this.props.player.losses
    }

    getRating () {
        return Math.round(this.props.player.ELO);
    }

    getProfileURL (player = {}) {
        let name = 'default';
        switch (player.name) {
            case 'Karthik' : 
                name = 'Karthik';
                break;
            case 'Irem' : 
                name = 'Irem';
                break;
            case 'Nick' : 
                name = 'Nick';
                break;
            default:
                break;
        }
        return 'images/profilePics/' + name + '.png';
    }

    render () {
        return (
            <div className="playerProfile">
                <div className="playerHeader">
                    <img src={this.getProfileURL(this.props.player)} height='120' width='120'/>
                    <div className='playerBio'>
                        <div className="playerName">{this.props.player.name}</div>
                        <div className="playerStats">  
                            <span className="playerRecord">{this.getRecord()}</span>
                            <span className="playerRanking">Rating: {this.getRating()}</span>
                        </div>
                    </div>
                </div>
                <div className="playerContent">
                    <div className="matchHistory">
                        <div className="matchHistoryTitle tableHeader">
                            Match History
                        </div>

                        <table className='matchHistoryTable'><tbody>
                        <tr className="headerRow">
                            <th></th>
                            <th>Date</th>
                            <th>Opponent</th>
                            <th>Result</th>
                        </tr>
                        {this.props.player.matches.map((match, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{match.date}</td>
                                <td>{match.opponent}</td>
                                <td>{match.won ? 'W' : 'L'}</td>
                        </tr>)}
                    </tbody></table>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerProfile;