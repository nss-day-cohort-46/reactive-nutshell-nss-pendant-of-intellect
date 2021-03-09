import React from "react"
import { Route } from "react-router-dom"
import { FriendsProvider } from "./friends/FriendsProvider"
import { FriendList } from "./friends/FriendList"
import { UsersProvider } from "./users/UsersProvider"
import { UserList } from "./users/UserList"
import { MessageList } from "./messages/MessageList"
import { MessageProvider } from "./messages/MessageProvider"
import { NewsArticleForm } from "./newsArticle/NewsArticleForm"
import { NewsArticleList } from "./newsArticle/NewsArticleList"
import { NewsArticleProvider } from "./newsArticle/NewsArticleProvider"
import { TaskList } from "./tasks/TaskList"
import { TaskProvider } from "./tasks/TaskProvider"
import { TaskForm } from "./tasks/TaskForm"
import { EventProvider } from "./events/EventProvider"
import { EventList } from "./events/EventList"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>

      <UsersProvider>
        <FriendsProvider>
          <Route path="/friends">
            <UserList />
            <FriendList />
          </Route>
        </FriendsProvider>
      </UsersProvider>

      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <NewsArticleProvider>
        <Route exact path="/">
          <NewsArticleList />
        </Route>
        <Route path="/NewsArticleForm">
          <NewsArticleForm />
        </Route>
      </NewsArticleProvider>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>

      <UsersProvider>
        <MessageProvider>
          <Route path="/messages">
            <MessageList />
          </Route>
        </MessageProvider>
      </UsersProvider>

      <TaskProvider>
        <Route path="/tasks/create">
          <TaskForm />
        </Route>
        <Route path="/tasks">
          {/* Render the component for the user's tasks */}
          <TaskList />
        </Route>
      </TaskProvider>

      <EventProvider>
        <Route path="/events">
          <EventList />
        </Route>
      </EventProvider>
    </>
  )
}
