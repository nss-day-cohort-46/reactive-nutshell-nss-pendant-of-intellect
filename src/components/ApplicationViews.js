import React from "react"
import { Route } from "react-router-dom"
import { TaskForm } from "./tasks/TaskForm"
import { TaskProvider } from "./tasks/TaskProvider"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
        <TaskProvider>
          <TaskForm />
        </TaskProvider>
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
