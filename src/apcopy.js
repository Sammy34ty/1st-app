import Header from './Mycomponents/Header';
//imported header 1st
import Footer from './Mycomponents/Footer';
//imported footer 5th
import Todo from './Mycomponents/Todo';
//imported Todo 2nd
import Addtodo from './Mycomponents/Addtodo';
//imported Add todo 3rd
import { About } from './Mycomponents/About';
//imported About 4th
import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
// here i made an varible inittodo to store todos into it
function App() {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    // here i made onDlete function to delete todos
    // have to ask about that
    const onDelete = (todo) => {
        console.log(" I am on Delete of Todo", todo);
        setTodos(todos.filter((e) => {
            return e !== todo;
        }))
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    // here i passed a variable inittodo in use state to update the values of set todos array
    // here i said the todos is an array and inittodo is an object and inittodos data will be stored in todos 
    //inittodo and settodos will be the updated todos 
    const [todos, setTodos] = useState(initTodo
        // {
        //   sno: 1,
        //   title:"Go To Gym",
        //   desc: "i have to go to gym"
        // },
        // {
        //   sno: 2,
        //   title:"Go To Food Store",
        //   desc: "i have to go to eat"
        // },
        // {
        //   sno: 3,
        //   title:"Go to Work",
        //   desc: "i have to go to Office"
        // }
    );
    // here is the addtodo funtion
    const addTodo = (title, desc) => {
        console.log("iam adding this todo", title, desc);
        // here i used let to define a variable sno because i want to reassinged the by adding new todo values
        // thats why cant use const for this variable sno
        let sno;
        console.log(todos.length);
        // in if i said if todos.lenght is eqaul to 0 then sno will be eqaul to 0
        if (todos.length === 0) {
            sno = 0;
        }
        // in else i said sno is eqaul to todos then i passed a object in which i said todos length=0 
        // so minuse 1 from zero so the sno which is equals to 0 will be converted in -1 
        // so when todos length will not = 0 then plus 1 after that the sno which is eqauls to -1
        // will be converted into 0 again and 0 will be assinged to our 1st todo which will be added 
        else {
            sno = todos[todos.length - 1].sno + 1;
        }
        // here i have an object in which am assining the value to the keys to use that keys in in settodos
        const mytodo = {
            sno: sno,
            title: title,
            desc: desc,
        }
        setTodos([...todos, mytodo]);
    }
    // have to ask about it
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos])
    return (
        <div className="App">
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit and Make Your 1st Project.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Now
        </a>
      </header> */}
            <Router>
                {/* passing tile via props to header */}
                <Header title="My Todos List" searchbar={false} />
                <Switch>
                    <Route exact path="/" render={() => {
                        return (
                            <>
                                {/* passing addTodo via named props to Addtodo /or  passing a function to Addtodo.js  */}
                                {/* Here i have to ask about the addtodo props */}
                                <Addtodo addTodo={addTodo} />
                                {/* Addtodo is Complted */}
                                {/* here i have passed two function to todo component function name is todos and onDelete */}
                                <Todo todos={todos} onDelete={onDelete} key={todos.sno} />
                            </>)
                    }}>
                    </Route>
                    {/* giving path to About Componenet to swicth the home tab to about tab */}
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
