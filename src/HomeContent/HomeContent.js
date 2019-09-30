import React from 'react';
import './HomeContent.css';

class HomeContent extends React.Component {
   
    render () {
        return (<div className="homeContent">
        <div className="greetingText">
            <h3>Welcome to the TSI table tennis website!</h3>
            <p>Use this page to check on rankings and any information about past or future tournaments</p>
        </div>
            <div className="contentBox">
                <div className="contentHeader">
                    Update 1 - TSI's first tournament, Ben's dominance
                </div>
                <div className="contentMain">
                    August 23rd 2019 marked the first TSI tournament. Strong showings by Sai and Matt were stifled by an absolutely dominant performance from Ben, who claimed victory with relative ease.
                </div>
                <div className="contentPhotoContainer">
                
                    <img src={process.env.PUBLIC_URL + '/images/Tournament1Outcome.JPG'}></img>
                </div>
            </div>  
        </div>);
    }
}

export default HomeContent;