import React, { useState, useContext } from "react";
import { TodoInputContext } from "./context/context";

const TodoInput = () => {
    const { addTodo } = useContext(TodoInputContext);

    const [todo, setTodo] = useState("");

    function handleTodoSubmit(event) {
        event.preventDefault();

        addTodo(todo);
    }

    return (
        <form onSubmit={handleTodoSubmit}>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit">Submit Todo</button>
        </form>
    );
};

export default TodoInput;