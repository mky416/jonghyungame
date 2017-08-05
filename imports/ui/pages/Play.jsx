import React from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import { fixData } from '../../api/songs.fixture.js';

const styles ={
    white: {
        maxWidth: '720px', position:'absolute',
    },
    disc: {
        maxWidth: '200px', position: 'relative', left: '260px', top: '50px',
    },
    youtubeHidingContainer: {
        height: 0,
        width: 0,
        overflow: 'hidden',
    },
};

export default class Play extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            play : 0
        };
    }
    
    myFunction = () => {
        console.log("CLICKED");
        this.setState({play:1});
    };
    
    
    render() {
        return (
            <div>
                <h1>{fixData.data}</h1>
                <img src="/images/play22.png" style={styles.white} />
                <a href="" onClick={this.myFunction}>
                
                    <img src="/images/compact-disc.png" style={styles.disc} />
                    <div style={styles.youtubeHidingContainer}>
                        <YouTube 
                            videoId={'afxLaQiLu-o'}
                            onReady={({target}) => {
                                const internalPlayer = target;
                                internalPlayer.seekTo(30); 
                            }}
                            onStateChange={({target, data}) => {
                                if (data === 1) { // Play Event
                                    setTimeout(() => target.stopVideo(), 1000);
                                }
                            }}
                        />
                    </div>
                </a> 
            </div>
        );
    }
}