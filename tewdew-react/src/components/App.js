import React, { Component } from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import { connect } from 'react-redux';
import { fetchTodosFromServer } from '../state/actions';
import '../styling/App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchTodosFromServer();
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
    return this.props.todos ?
      <div className="App">
        <div className="center-content">
          <NewTodo prependToList={this.prependToList.bind(this)}/>
          <TodoList
            todos={this.props.todos}
            removeFromList={this.removeFromList.bind(this)}
            toggleStrikethru={this.toggleStrikethru.bind(this)}/>
        </div>
      </div>
      : <div></div>
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect (mapStateToProps, { fetchTodosFromServer })(App);
