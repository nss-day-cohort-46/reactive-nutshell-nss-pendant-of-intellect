/*
INFO
Auther:Stacey Littrell
Purpose of Module:Task form which is responable for adding a new task and editing an existing task
*/
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { TaskContext } from "./TaskProvider"
import "./Tasks.css"

export const TaskForm = () => {
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    // console.log("userid", currentUserId)
    const {tasks, getTasks, addTask, modifyTask, getTaskById} = useContext(TaskContext)

    const [task, setTask] = useState({
        name: "",
        userId: currentUserId,
        completedByDate: "",
        complete: false
    })
    const [isLoading, setIsLoading] = useState()
    
    const {taskId}= useParams()

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
           setIsLoading(true)
           if(taskId){
            modifyTask({
                name: task.name,
                userId: currentUserId,
                completedByDate: task.completedByDate,
                complete: false,
                id: task.id
            })
            .then(() => history.push("/tasks"))
           }
           else{
           addTask(task)
           .then(() => history.push("/tasks"))
        }
       }
    }
    useEffect(()=>{
        getTasks()
        .then(() =>{
            if(taskId){
                getTaskById(taskId)
                .then(taskobj => {
                    setTask(taskobj)
                    setIsLoading(false)
                })
            }
            else{setIsLoading(false)}
        } )
    }, [])

    return (
        <>
            <h2>{taskId ? "Update Task" : "New Task"}</h2>
            {/* <div>{task.name}</div> */}
            <form>
                <fieldset className="task__name">
                <div className="form__task">
                    <label htmlFor="taskName">Task: </label>
                    <input type="text" id="name" required autoFocus className="taskForm" value={task.name}
                    onChange={changeHandle}/>
                </div>
            </fieldset>
            <fieldset className="task__date">
                <div className="form__task">
                <label htmlFor="taskCompleteBy">Task Completed By: </label>
                    <input type="date" id="completedByDate" required className="taskForm" value={task.completedByDate} onChange={changeHandle}></input>
                </div>
            </fieldset>
            <button className="btn-saveTask"
                disabled={isLoading}
                onClick={event => { event.preventDefault() 
                    saveTask()}}>
                {taskId ? "Update Task" : "New Task"}
            </button>
            <button className="closeNewTask" onClick={() => history.push("/tasks")}>x</button>
            </form>
        </>
    )
};
