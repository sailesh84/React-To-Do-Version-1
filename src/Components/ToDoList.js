import React, {useContext} from "react";
import {AiTwotoneDelete} from "react-icons/ai";
import { REMOVE_TODO } from "../Context/Action.Type";
import { ToDoContext } from "../Context/ToDoContext";


const ToDoList = () => {
    const {todos, dispatch} = useContext(ToDoContext);
    const handleSubmit = (todo) => e => {
        e.preventDefault();

        dispatch({
            type: REMOVE_TODO,
            payload: todo.id
        });
    }


    return(
        <ul className="mt-3 mb-2 list-group">
            {todos.map(todo => (
                <li className="list-group-item" key={todo.id}>
                    {todo.toDoString}
                    
                    <span className="float-end" onClick={handleSubmit(todo)}><AiTwotoneDelete /></span>
                </li>
            ))}
        </ul>
    )
}

export default ToDoList;