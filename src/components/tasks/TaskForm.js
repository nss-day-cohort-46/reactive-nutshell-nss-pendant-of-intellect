import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { TaskContext } from "./TaskProvider"
import "./Tasks.css"

export const TaskForm = () => {
    const userId = parseInt(sessionStorage.getItem("nutshell_user"))
    // console.log("userid", userId)
    const {tasks, getTasks, addTask} = useContext(TaskContext)

    const [task, setTask] = useState({
        name: "",
        userId: parseInt(userId),
        completedByDate: "",
        complete: false
    })

    const history = useHistory()

    const changeHandle = (event) => {
        const newTask = {...task}
        newTask[event.target.id]=event.target.value
        setTask(newTask)
    }

    const saveTask = () => {
       if (task.name && task.completedByDate === "") {
        window.alert("Please fill in all inputs")
       }
       else{
           addTask(task)
       }
    }
    useEffect(()=>{
        getTasks()
    }, [])

    return (
        <form>
            <fieldset className="task__name">
              <div className="form__task">
                  <label htmlFor="taskName">Task Name: </label>
                  <input type="text" id="name" required autoFocus className="taskForm" placeholder="" 
                  onChange={changeHandle}/>
              </div>
          </fieldset>
          <fieldset className="task__date">
              <div className="form__task">
              <label htmlFor="taskCompleteBy">Task Completed By: </label>
                <input type="date" id="completedByDate" required className="taskForm" onChange={changeHandle}></input>
              </div>
          </fieldset>
          <button className="btn-saveTask"
            onClick={event => { event.preventDefault() 
                saveTask()}}>
            Add Task
          </button>
        </form>
    )
};
