import React from "react"
import { Route } from "react-router-dom"
import { MessageList } from "./messages/MessageList"
import { MessageProvider } from "./messages/MessageProvider"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>

      <MessageProvider>
        <Route path="/messages">
          <MessageList />
        </Route>
      </MessageProvider>


      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
