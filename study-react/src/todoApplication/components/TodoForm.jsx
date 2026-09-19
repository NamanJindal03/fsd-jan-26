import { useState } from "react";

export default function TodoForm({taskList, addTodoToList}){

    const [todoInput, setTodoInput] = useState('')

    function handleSubmit(e){
        e.preventDefault();

        //validate 
        const todoTask = todoInput.trim()
        if(todoTask === ""){
            alert('there should be some task present')
        }

        const todo = {
            id: Date.now(),
            taskName: todoTask,
            isCompleted: false,
            isDeleted: false
        }
        //todo structure prepration

        //add todo in the taskList
        addTodoToList(todo)

        setTodoInput("")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={todoInput} onChange={(e)=> setTodoInput(e.target.value)}/>
            <button>Add Todo</button>
        </form>
    )
}