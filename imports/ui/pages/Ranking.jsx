import React from 'react';

const styles ={
    name: {
        width:'700px',
        padding:'10px',
        background: 'white',
        borderRadius: '10px'
    }
}

export default class Ranking extends React.Component {
    render() {
        return (
            <div>
                <p style={styles.name}>내 점수</p>
                <p style={styles.name}>1등</p>
                <p style={styles.name}>2등</p>
                <p style={styles.name}>3등</p>
            </div>
        );

    }
}