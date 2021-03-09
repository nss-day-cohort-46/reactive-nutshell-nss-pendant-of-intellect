import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router";
import { TaskCard } from "./Task";
import { TaskContext } from "./TaskProvider";

export const TaskList = () => {
    const {tasks, getTasks} = useContext(TaskContext)
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

    
    useEffect(() => {
        getTasks()
    }, [])
    
    const userTasks = tasks.filter(task => task.userId === currentUserId)
    
    const history = useHistory()
    
    // debugger
        return (
            <>
                <h3>My Task Checklist </h3>        
                <div className="tasks">
                    {
                        userTasks.map(task => <TaskCard key={task.id} taskObj={task} />)
                    }
                    <button onClick={() => history.push("/tasks/create")}>Add New Task</button>
                </div>
            </>
        )
   
};
