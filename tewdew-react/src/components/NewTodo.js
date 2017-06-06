import React, { Component } from 'react';
import postData from './restComponents/post';


class NewTodo extends Component {
  printValue(e) {
    e.preventDefault();
    this.todo.value ?
      postData(this.todo.value, this.props.prependToList) :
      alert('Please enter a to-do item!')
    this.todo.value = '';
  }

  render() {
    return (
      <form onSubmit={this.printValue.bind(this)}>
        <input ref={(todo) => {this.todo = todo}}/>
        <button>New To-do</button>
      </form>
    )
  }
}

export default NewTodo;
