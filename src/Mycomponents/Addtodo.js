import React, { useState } from 'react'
export const Addtodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (title && desc) {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
    else {
      alert("Tilte or Decription cant be empty")
    }
  }

  return (
    <div>
      <h2 className='text-center my-3'>Add Todos</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <h3><label htmlFor="Text" className="form-label">Todo Title</label></h3>
          <input type="Title" onChange={(e) => setTitle(e.target.value)}
            value={title} className="form-control" id="desc" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <h3><label htmlFor="Text" className="form-label">Todo Description</label></h3>
          <input type="desc" onChange={(e) => setDesc(e.target.value)}
            value={desc} className="form-control" id="Desc" />
        </div>
        <button type="submit" className="btn btn-primary">Add Todo</button>
      </form>
    </div>
  )
}
export default Addtodo;