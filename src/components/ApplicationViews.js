import React from "react"
import { Route } from "react-router-dom"
import { FriendsContext, FriendsProvider } from "./friends/FriendsProvider"
import { FriendsList } from "./friends/FriendsList"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <FriendsProvider>
        <Route path="/friends">
          {FriendsList}
        </Route>
      </FriendsProvider>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
