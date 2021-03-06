/*
INFO
Auther:Stacey Littrell
Purpose of Module: jsx for task rendering,checking task as complete, and deleting task
*/
import { React, useState, useContext } from "react";
import { useHistory } from "react-router";
import { TaskContext } from "./TaskProvider";
import "./Tasks.css"

export const TaskCard = ({taskObj}) => {
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
    }
    
    if(taskObj.complete === true){
        return (<></>)
    }
    else {
    
        return(
            <>
                <div className="taskCard">
                <div className="task__dateComplete">Complete by: {taskObj.completedByDate}</div>
                <section>
                    <input type= "checkbox" id="complete" onClick={handleChange}></input>
                    <label forhtml={taskObj.id} className="task__name">
                    <div>{taskObj.name}</div>
                    </label>
                <button className="btn-removeTask" onClick={removeTaskClicked}>Delete</button>
                <button className="btn-editTask" onClick={() => {
                    history.push(`/tasks/edit/${taskObj.id}`)}}>Edit</button>
                </section>
                </div>
            </>

        )
    }   
}
