import React from 'react';

const styles ={
    white: {
        maxWidth: '600px', position:'absolute',
    },
    disc: {
        maxWidth: '200px', position: 'relative', left: '200px', top: '25px'
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