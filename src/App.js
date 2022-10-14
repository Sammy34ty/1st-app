import Header from './Mycomponents/Header';
import Footer from './Mycomponents/Footer';
import Todo from './Mycomponents/Todo';
import Addtodo from './Mycomponents/Addtodo';
import { About } from './Mycomponents/About';
import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {


  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log(" I am on Delete of Todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const [todos, setTodos] = useState(initTodo);

  const addTodo = (title, desc) => {
    console.log("iam adding this todo", title, desc);
    let sno;
    console.log(todos.length);
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, mytodo]);
  }


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])


  return (
    <div className="App">
      <Router>
        <Header title="My Todos List" searchbar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo addTodo={addTodo} />
                <Todo todos={todos} onDelete={onDelete} key={todos.sno} />
              </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
