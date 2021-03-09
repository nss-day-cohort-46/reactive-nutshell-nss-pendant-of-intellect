import { React, useState, useContext } from "react";
import { TaskContext } from "./TaskProvider";

export const TaskCard = ({taskObj}) => {
    const {updateTasks} = useContext(TaskContext)
    
    const [task, setTask] = useState({
        complete: false
    })

    const handleChange = (event) => {
        const newTask = {...task}
        newTask[event.target.id]=event.target.value
        setTask(newTask)
        if(event.target.value === "true"){
            const taskId = taskObj.id
            const checked = task
            updateTasks(taskId, checked)
        }
    }


    return(
        <>
            <div>Complete by: {taskObj.completedByDate}</div>
            <section>
                <input type= "checkbox" id="complete" value={true} onClick={handleChange}></input>
                <label forhtml={taskObj.id} className="task__name">
                <div>{taskObj.name}</div>
                </label>
            </section>
        </>

    )
}
