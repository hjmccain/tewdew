import React from 'react';
import '../styling/TodoList.css';

const TodoList = (props) => {

  return (
    <div>
      <ul>
        {props.todos.map((item, idx) => {
          let taskStyling;
          if (item.field_finished_ === 'Finished') { taskStyling = 'strikethru' }
          if (item.field_visible_ === 'Deleted') { taskStyling = 'hidden' }
          return <li className={taskStyling} key={idx}>{item.field_task}</li>
        })}
      </ul>
    </div>
  )
}

export default TodoList;
