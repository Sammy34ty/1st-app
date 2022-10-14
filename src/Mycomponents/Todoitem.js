import React from 'react'
export const Todoitem = (props) => {

  return (
    <>
      <div>
        <h4>{props.todo.title}</h4>
        <h6>{props.todo.desc}</h6>
      </div>
      <div><button className="btn btn-danger btn-sm my-3" onClick={() => { props.onDelete(props.todo) }}>Delete</button></div>
    </>
  )
}

export default Todoitem