import React from 'react';

import { Link } from 'react-router-dom';

const styles ={
    hero: {
        marginTop: '280px',
        marginBottom: '50px',
    },
    play: {
        marginLeft: '20px',
    }
}

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <center style={styles.hero}>
                   <img src="/images/jonghyuneegame.png"/> 
                </center>
                <center>
                <Link to='/ranking'>
                    <img src="/images/ranking.png" />
                </Link>
                <Link to='/play'>
                    <img src="/images/play.png" style={styles.play}/>
                </Link>
                </center>
            </div>
        );

    }
}