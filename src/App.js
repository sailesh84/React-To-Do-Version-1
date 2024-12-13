import React, { useEffect, useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToDoContext } from "./Context/ToDoContext"
import todoReducer from "./Context/Reducers";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";


const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const localToDos = localStorage.getItem(todos);
    // console.log(localStorage);

    if(localToDos){
      dispatch(JSON.parse(localToDos));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("Component return current value", todos);

    return () => {
      console.log("Component return previous value", todos);
    }

  }, [todos]);

  return (
    <ToDoContext.Provider value={{ todos, dispatch }}>
      <div className="container">
        <h1 className="mb-5">ToDo API with Context API</h1>
        <ToDoForm />
        <ToDoList />
      </div>
    </ToDoContext.Provider>
  );
}

export default App;
