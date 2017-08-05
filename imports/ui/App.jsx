import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';
 
import Home from './pages/Home';
import Play from './pages/Play';
import Ranking from './pages/Ranking';

import Task from './Task.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

const styles = {
    container: {
        maxWidth: '720px', margin: 'auto', paddingTop: '36px',
    }
}
 
// App component - represents the whole app
class App extends Component {
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
      <div className="container">          
        <BrowserRouter>
            <div style={styles.container}>
                <Route exact path='/play' component={Play} />
                <Route exact path='/ranking' component={Ranking} />
                <Route exact path='/' component={Home} />
            </div>
        </BrowserRouter>
          
        <AccountsUIWrapper />
      </div>
    );
  }
}


App.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};
 
export default createContainer(() => {
    Meteor.subscribe('tasks');
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
}, App);