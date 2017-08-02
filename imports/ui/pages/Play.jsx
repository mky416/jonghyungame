import React from 'react';

const styles ={
    white: {
        maxWidth: '720px', position:'absolute',
    },
    disc: {
        maxWidth: '200px', position: 'relative', left: '260px', top: '50px',
    }
}

export default class Play extends React.Component {
    render() {
        return (
            <div>
                <img src="/images/play22.png" style={styles.white} />
                <img src="/images/compact-disc.png" style={styles.disc}/>               
            </div>
        );

    }
}