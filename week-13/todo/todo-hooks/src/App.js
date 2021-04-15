import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TodoInputContext, TodoContext } from "./context/context";
import TodoInput from "./TodoInput"
import Todo from "./Todo";
import "./App.css";

let todoObj = [
    {
        id: uuidv4(),
        todo: "walk the dog",
        isCompeted: false,
    },
    {
        id: uuidv4(),
        todo: "get the cat",
        isCompeted: false,
    },
]


function App() {
const [todoArray, setTodoArray] = useState(todoObj);

function addTodo(todo) {
    let newAddedTodoArray = [
        ...todoArray,
        {
        id: uuidv4(),
        todo: todo,
        isCompeted: false,
        }
    ]
}

    function showTodoInput(){
        return <TodoInputContext.Provider value={{addTodo}}>
            <TodoInput/>
            </TodoInputContext.Provider>
    }

    function showTodo(){
        return todoArray.map((item) => {
return (
    <TodoContext.Provider 
    key={item.id} 
    value={{
        todoItem: item,
    }}>
        <Todo/>
    </TodoContext.Provider>
    );
    })
        
}
  return <div className="App">
      {showTodoInput()}
      {showTodo()}
      </div>
}
export default App;