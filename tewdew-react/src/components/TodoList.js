import React, { Component } from 'react';
import patchData from './restComponents/patch';
import deleteData from './restComponents/delete';
import '../styling/TodoList.css';

class TodoList extends Component {

  render() {
    const { todos, removeFromList, toggleStrikethru } = this.props;
    return (
      <div>
        <ul>
          {todos.map((item) => {
            const findNode = (path) => new RegExp(/[0-9]+/).exec(path);
            const node = findNode(item.path);
            let taskStyling;
            if (item.field_finished_ === 'Finished') { taskStyling = 'strikethru' }
            if (item.field_visible_ === 'Deleted') { taskStyling = 'hidden' }
            return (
              <div className={'todoItem'} key={item.uuid}>
                <p onClick={() => deleteData(node, item.uuid, removeFromList)}>X</p>
                <li
                  onDoubleClick={() => patchData(node, item.field_finished_, toggleStrikethru)}
                  className={taskStyling}
                  id={node}>{item.field_task}
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TodoList;
