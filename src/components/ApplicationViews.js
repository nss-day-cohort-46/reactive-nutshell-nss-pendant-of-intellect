import React from "react"
import { Route } from "react-router-dom"
import { FriendsProvider } from "./friends/FriendsProvider"
import { FriendList } from "./friends/FriendList"
import { FriendConfirm } from "./friends/FriendConfirm"
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
import { EventForm } from "./events/EventForm"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>

      <UsersProvider>
        <FriendsProvider>
          <Route exact path="/friends">
            <UserList />
            <FriendList />
          </Route>

          <Route exact path = "/friends/add/:userId(\d+)">
            <FriendConfirm />
          </Route>
        </FriendsProvider>
      </UsersProvider>

      <Route path="/messages">
        {/* Render the component for the messages */}
          </Route>
          <FriendsProvider>
            <UsersProvider>
              <NewsArticleProvider>
                <Route exact path="/">
                  <NewsArticleList />
                </Route>
                <Route path="/NewsArticleForm">
                  <NewsArticleForm />
                </Route>
              </NewsArticleProvider>
            </UsersProvider>
          </FriendsProvider>

      <UsersProvider>
        <MessageProvider>
          <Route path="/messages">
            <MessageList />
          </Route>
        </MessageProvider>
      </UsersProvider>

      <TaskProvider>
        <Route exact path="/tasks/create">
          <TaskForm />
        </Route>
        <Route exact path="/tasks/edit/:taskId(\d+)">
          <TaskForm />
        </Route>
        <Route exact path="/tasks">
          {/* Render the component for the user's tasks */}
          <TaskList />
        </Route>
        <Route exact path="/tasks/view/:complete">
          <TaskList />
        </Route>
      </TaskProvider>

      <EventProvider>

        <Route exact path="/events">
          <EventList />
        </Route>

        <Route path="/events/create">
          <EventForm />
          <EventList />
        </Route>
        
      </EventProvider>
    </>
  )
}
