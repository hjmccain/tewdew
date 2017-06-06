import React, { Component } from 'react';
import postData from './restComponents/post';


class NewTodo extends Component {
  printValue(e) {
    e.preventDefault();
    console.log(this.todo.value);
    postData(this.todo.value, this.props.prependToList);
    this.todo.value = '';
  }

  render() {
    return (
      <div>
        <input ref={(todo) => {this.todo = todo}}/>
        <button onClick={this.printValue.bind(this)}>New To-do</button>
      </div>
    )
  }
}

export default NewTodo;
