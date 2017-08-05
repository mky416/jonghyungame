import React from 'react';

import YouTube from 'react-youtube';
import Modal from './Modal';

const styles ={
    white: {
        maxWidth: '720px', position:'absolute', 
    },
    disc: {
        maxWidth: '200px', position: 'relative', left: '260px', top: '50px',
    },
    enter: {
        maxWidth: '130px', position: 'relative', left: '295px', top: '150px',
    },
    youtubeHidingContainer: {
        height: 0,
        width: 0,
        overflow: 'hidden',
    },
    modaltemp:{
        height:'50px',
        width:'120px',
        position:'relative',
        left: '295px', top: '150px',
    }
};


export default class Play extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { isOpen: false };
    }
    
    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <img src="/images/play22.png" style={styles.white} />
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
     <div style={styles.modaltemp}>
     <button onClick={this.toggleModal}>
          <img src="/images/enter.png" /> 
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
    </div>
            </div>
            
        );

    }
}