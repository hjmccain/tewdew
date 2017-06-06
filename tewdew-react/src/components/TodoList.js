import React, { Component } from 'react';
import patchData from './restComponents/patch';
import deleteData from './restComponents/delete';
import '../styling/TodoList.css';

class TodoList extends Component {
  constructor() {
    super();
    this.confirmAndDelete = this.confirmAndDelete.bind(this);
  }

  confirmAndDelete(node, uuid, func) {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteData(node, uuid, func)
    }
  }

  render() {
    const { todos, removeFromList, toggleStrikethru } = this.props;
    return (
      <div>
        <ul>
          {todos.map(item => {
            const findNode = (path) => new RegExp(/[0-9]+/).exec(path);
            const node = findNode(item.path);
            let taskStyling, contentEditable, liContent, icon;
            if (item.field_finished_ === 'Finished') {
              taskStyling = 'strikethru';
              contentEditable = false;
              icon = <i className="fa fa-check-square-o" aria-hidden="true"></i>;
            } else {
              contentEditable = true;
              icon = <i className="fa fa-square-o" aria-hidden="true"></i>;
            }
            return (
              <div className='todoItem' key={item.uuid}>
                <li
                  ref={content => liContent = content}
                  onKeyUp={() => patchData(node, liContent.innerText, null, null)}
                  contentEditable={contentEditable}
                  className={taskStyling}
                  id={node}>{item.field_task}
                </li>
                <p onClick={() => patchData(node, item.field_task, item.field_finished_, toggleStrikethru)}>{icon}</p>
                <p onClick={() => this.confirmAndDelete(node, item.uuid, removeFromList)}><i className="fa fa-trash-o" aria-hidden="true"></i></p>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TodoList;

//
