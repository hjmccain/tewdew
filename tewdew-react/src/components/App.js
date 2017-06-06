import React, { Component } from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import '../styling/App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentWillMount() {
    fetch(
      '/api/todos'
    ).then(res => res.json()
    ).then(data => {
      this.setState({ todos: data });
      console.log(data)
    }).catch(err => console.error('ERROR:', err))
  }

  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos} />
        <NewTodo />
      </div>
    );
  }
}

export default App;
