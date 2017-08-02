import React from 'react';
import { BrowserRouter ,Route } from 'react-router-dom';

import Home from './pages/Home';
import Play from './pages/Play';
import Ranking from './pages/Ranking';

const styles = {
    container: {
        maxWidth: '720px', margin: 'auto', paddingTop: '36px',
    }
}

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div style={styles.container}>
                    <Route exact path='/play' component={Play} />
                    <Route exact path='/ranking' component={Ranking} />
                    <Route exact path='/' component={Home} />

                </div>
            </BrowserRouter>
        );
    }
}