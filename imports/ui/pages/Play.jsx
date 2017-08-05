import React from 'react';

import YouTube from 'react-youtube';


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
    
    render() {
        return (
            <div>
                <img src="/images/play22.png" style={styles.white} />
                <img src="/images/compact-disc.png" style={styles.disc}/>    
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
            </div>
        );

    }
}