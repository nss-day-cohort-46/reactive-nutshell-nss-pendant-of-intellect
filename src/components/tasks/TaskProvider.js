import React, { createContext, useState } from 'react';

export const TaskContext = createContext()

export const TaskProvider = (props) => {
    const[tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks")
        .then(res => res.json())
        .then(setTasks)
    }
    const addTask = taskObj => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
        .then(getTasks)
    }

    const updateTasks = (taskId, checked) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(checked)
        })
          .then(getTasks)
      }

    return (
        <TaskContext.Provider value={{
            tasks, getTasks, addTask, updateTasks
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
