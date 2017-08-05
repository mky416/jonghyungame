import React from 'react';

const styles ={
    name: {
        width:'720px',
    }
}

export default class Ranking extends React.Component {
    render() {
        return (
            <div>
                <img src="/images/name.png" style={styles.name}/>
            </div>
        );

    }
}