import React, { Component } from 'react';
import base64 from 'base-64';

class NewTodo extends Component {
  printValue(e) {
    e.preventDefault();
    const credentials = base64.encode('hmccain:droopyjuice');
    console.log(this.todo.value);
    fetch(
      '/entity/node?_format=hal_json', {
        method: 'POST',
        headers: {
          'Content-type': 'application/hal+json',
          'Authorization': `basic ${credentials}`
        },
        body: JSON.stringify({
          "_links": {
            "self": {
              "href": "http://tewdew:8888/entity/node"
            },
            "type": {
              "href": "http://tewdew:8888/rest/type/node/to_do"
            }
          },
          "title": [this.todo.value],
          "field_task": [this.todo.value],
          "field_finished_": ["1"]
        })
      }
    ).then(res => res.json()
    ).then(data => {
      this.setState({ todos: data });
      console.log(data)
    }).catch(err => console.error('ERROR:', err))
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
