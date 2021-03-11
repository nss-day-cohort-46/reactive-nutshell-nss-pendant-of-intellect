/*
INFO
Auther:Stacey Littrell
Purpose of Module: Render a List of tasks that belong to the current user 
*/
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router";
import { TaskCard } from "./Task";
import { TaskContext } from "./TaskProvider";
import { CompletedTaskCard } from "./TasksComplete"
import "./Tasks.css"

export const TaskList = () => {
    const {tasks, getTasks} = useContext(TaskContext)
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

    
    useEffect(() => {
        getTasks()
    }, [])
    
    const completedTasks = tasks.filter(task => task.complete === true && task.userId === currentUserId)

    const {complete} = useParams()
    
    const userTasks = tasks.filter(task => task.userId === currentUserId)
    
    const history = useHistory()
    console.log("comp. task", completedTasks)
    
    // debugger
    if(complete){
        return (
            <>   
                <h3 className="taskHeader">My Completed Tasks </h3> 
                <h5 className="taskHeader">Uncheck task to move it back into your task checklist</h5>    
                <div className="tasks complete">
                    {
                        completedTasks.map(task => <CompletedTaskCard key={task.id} taskObj={task} />)
                    }
                    <button className="taskbtn" onClick={() => history.push("/tasks")}>Tasks</button>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <h3 className="taskHeader">My Task Checklist </h3> 
                    <div className="taskbtn__contanier">      
                        <button className="taskbtn btn-addTask" onClick={() => history.push("/tasks/create")}>Add New Task</button>
                        <button className="taskbtn btn-seeCompleteTask" onClick={() => history.push("/tasks/view/complete")}>Completed task list</button>
                    </div> 
                <div className="tasks">
                    {
                        userTasks.map(task => <TaskCard key={task.id} taskObj={task} />)
                    }
                </div>
            </>
        )

    }
   
};
