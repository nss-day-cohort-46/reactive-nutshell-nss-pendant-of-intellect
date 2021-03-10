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
                <h3>My Completed Tasks </h3> 
                <p>Uncheck task to move it back into your task checklist</p>    
                <div className="tasks complete">
                    {
                        completedTasks.map(task => <CompletedTaskCard key={task.id} taskObj={task} />)
                    }
                    <button onClick={() => history.push("/tasks")}>Tasks</button>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <h3>My Task Checklist </h3>        
                <div className="tasks">
                    {
                        userTasks.map(task => <TaskCard key={task.id} taskObj={task} />)
                    }
                    <button onClick={() => history.push("/tasks/create")}>Add New Task</button>
                    <button onClick={() => history.push("/tasks/view/complete")}>Completed tasks</button>
                </div>
            </>
        )

    }
   
};
