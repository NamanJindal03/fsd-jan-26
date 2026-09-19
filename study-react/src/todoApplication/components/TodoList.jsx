export default function TodoList({taskList, deleteTask, completeTask}){
    return(
        <>
            {/* Iterate over the task list -> display the 2 buttons alongs with it "co" "de" */}
            {
                taskList.map((task)=>{
                    if(task.isDeleted) return null;
                    return (
                        <div key={task.id} style={{display: "flex", justifyContent: 'space-between'}}>
                            <p style={task.isCompleted ? {textDecoration: "line-through"}: {}}>{task.taskName}</p>
                            <div>
                                <button onClick={()=> completeTask(task.id)}>Comp</button>
                                <button onClick={()=> deleteTask(task.id)}>Del</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

