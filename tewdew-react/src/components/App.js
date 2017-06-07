import React, { Component } from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import '../styling/App.css';

class App extends Component {
  state = { todos: [] }

  componentWillMount() {
    fetch(
      '/api/todos'
    ).then(res => res.json()
    ).then(data => {
      this.setState({ todos: data });
      console.log(data)
    }).catch(err => console.error('ERROR:', err))
  }

  prependToList(item, path, uuid) {
    const newState = [{ field_task: item, path, uuid }, ...this.state.todos];
    this.setState({ todos: newState });
  }

  removeFromList(uuid) {
    const { todos } = this.state;
    const idx = todos.findIndex(node => node.uuid === uuid);
    this.setState({ todos: [...todos.slice(0, idx), ...todos.slice(idx+1)]});
  }

  toggleStrikethru(uuid) {
    const { todos } = this.state;
    const item = todos.filter(node => node.uuid === uuid);
    const finished = item[0].field_finished_ === 'Unfinished' ? 'Finished' : 'Unfinished';
    const newItem = { field_task: item[0].field_task, path: item[0].path, uuid: item[0].uuid, field_finished_: finished}
    const idx = todos.findIndex(node => node.uuid === uuid);
    this.setState({ todos: [...todos.slice(0, idx), newItem, ...todos.slice(idx+1)]});
  }

  render() {
    return (
      <div className="App">
        <div className="center-content">
          <TodoList
            todos={this.state.todos}
            removeFromList={this.removeFromList.bind(this)}
            toggleStrikethru={this.toggleStrikethru.bind(this)}/>
          <NewTodo prependToList={this.prependToList.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
