import React from 'react';

const styles ={
    ranking:{
        width: '700px',
        borderRadius: '5px',
        padding: '10px',
        marginTop: '5px',
        backgroundColor: 'white',
    },
}

export default class Ranking extends React.Component {
    render() {
        return (
        <div>
            <p style={styles.ranking}>내 점수</p>
            <p style={styles.ranking}>1등</p>
            <p style={styles.ranking}>2등</p>
        </div>
        );

    }
}