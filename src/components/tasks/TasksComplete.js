/*
INFO
Auther:Stacey Littrell
Purpose of Module: jsx for completed task rendering, unchecking task renders it back to checklist, and deleting task
*/
import { React, useState, useContext } from "react";
import { useHistory } from "react-router";
import { TaskContext } from "./TaskProvider";

export const CompletedTaskCard = ({taskObj}) => {
    const {updateTasks, removeTask} = useContext(TaskContext)
    const history = useHistory()
    const [task, setTask] = useState({
        complete: false
    })
    const removeTaskClicked = (event) => {
        removeTask(taskObj.id)
    }

    const handleChange = (event) => {
        const newTask = {...task}
        newTask[event.target.id]=event.target.checked
        setTask(newTask)
        // debugger
        if(event.target.checked === true){
            const taskId = taskObj.id
            const checked = newTask
            updateTasks(taskId, checked)
        }
        if(event.target.checked === false) {
            const taskId = taskObj.id
            const checked = newTask
            updateTasks(taskId, checked)
        }
        history.push("/tasks")
    }
    
    if(taskObj.complete === false){
        return (<></>)
    }
    else {
    
        return(
            <>
                
                <div>Complete by: {taskObj.completedByDate}</div>
                <section>
                    <input type= "checkbox" id="complete" defaultChecked onClick={handleChange}></input>
                    <label forhtml={taskObj.id} className="task__name">
                    <div>{taskObj.name}</div>
                    </label>
                <button className="btn-removeTask" onClick={removeTaskClicked}>x</button>
                <button className="btn-editTask" onClick={() => {
                    history.push(`/tasks/edit/${taskObj.id}`)}}>Edit</button>
                </section>
            </>

        )
    }   
}
