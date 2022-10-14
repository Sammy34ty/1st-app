import React from 'react'
import Todoitem from './Todoitem'
export const Todo = (props) => {

  return (
    <div className="container">
      <h3 className='text-center my-3'>Todo List</h3>
      {props.todos.length === 0 ? <div>
        <h4>No Todos Added</h4>
        <div className="spinner-grow text-danger" role="status">
        </div>
      </div> :
        props.todos.map((todo) => {
          return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })
      }
    </div>
  )
}

export default Todo;
