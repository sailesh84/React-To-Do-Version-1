import React, { useState, useContext } from "react";
import { v4 } from "uuid";
import { ADD_TODO } from "../Context/Action.Type";
import { ToDoContext } from "../Context/ToDoContext";

const ToDoForm = () => {
    const [toDoString, setToDoString] = useState("");   //create state
    const { dispatch } = useContext(ToDoContext);         //create dispatch
    const handleSubmit = e => {
        e.preventDefault();

        //validation for empty textfield
        if (toDoString === "") {
            return alert("Please enter todo");
        }

        //creating object if textfield is not empty
        const todo = {
            toDoString,
            id: v4()
        }

        //This is a method, where somebody is passing as a props
        // addToDo(todo);

        dispatch({
            type: ADD_TODO,
            payload: todo
        });

        //empty out of the forms
        setToDoString("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Your next todo" name="todo" id="todo"
                        value={toDoString} onChange={e => setToDoString(e.target.value)} />
                    <button className="btn btn-outline btn-warning" type="button">Add</button>
                </div>
            </div>
        </form>
    )
}

export default ToDoForm;