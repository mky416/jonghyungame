import React from 'react';
import { BrowserRouter ,Route } from 'react-router-dom';

import Home from './pages/Home';
import Play from './pages/Play';
import Ranking from './pages/Ranking';
import Modal from './pages/Modal';
import AccountsUIWrapper from './AccountsUIWrapper';

const styles = {
    container: {
        maxWidth: '720px', margin: 'auto', paddingTop: '36px',
    }
}

 
// App component - represents the whole app
export default class App extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
           hideCompleted: false,
        };
    }
    
    
    handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    Meteor.call('tasks.insert', text);
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  
  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }
  
  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;
 
      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }
 
  render() {
    return (
      <div>      
          <BrowserRouter>
            <div style={styles.container}>
                <AccountsUIWrapper />
                <Route exact path='/play' component={Play} />
                <Route exact path='/ranking' component={Ranking} />
                <Route exact path='/' component={Home} />
                
            </div>
        </BrowserRouter>
      </div>
    );
  }
}
