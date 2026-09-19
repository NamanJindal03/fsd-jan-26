import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
export default function App(){
    /*
        {
            id: '',
            taskName: '',
            isCompleted: false,
            isDeleted: false
        }
     */
    const [taskList, setTaskList] = useState([])

    function addTodoToList(task){
        setTaskList([task, ...taskList])
    }
    function deleteTask(taskId){
        const updatedTaskList = taskList.map((task)=>{
            if(task.id === taskId){
                return {...task, isDeleted: true}
            }
            return task
        })
        setTaskList(updatedTaskList)
    }
    function completeTask(taskId){
        console.log(taskId)
        const updatedTaskList = taskList.map((task)=>{
            if(task.id === taskId){
                return {...task, isCompleted: true}
            }
            return task
        })
        setTaskList(updatedTaskList)
    }
    return(
        <>
            <TodoForm taskList={taskList} addTodoToList={addTodoToList}/>
            <TodoList taskList={taskList} deleteTask={deleteTask} completeTask={completeTask}/>
        </>
    )
}