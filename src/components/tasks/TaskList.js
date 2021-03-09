import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router";
import { TaskCard } from "./Task";
import { TaskContext } from "./TaskProvider";

export const TaskList = () => {
    const {tasks, getTasks} = useContext(TaskContext)

    useEffect(() => {
        getTasks()
    }, [])

    const history = useHistory()

    return (
        <>
            <h3>My Task Checklist </h3>        
            <div className="tasks">
                {
                    tasks.map(task => <TaskCard key={task.id} taskObj={task} />)
                }
                <button onClick={() => history.push("/tasks/create")}>Add New Task</button>
            </div>
        </>
    )
};
