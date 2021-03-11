import React from "react"
import { Route } from "react-router-dom"
import { FriendsProvider } from "./friends/FriendsProvider"
import { FriendList } from "./friends/FriendList"
import { FriendConfirm } from "./friends/FriendConfirm"
import { UsersProvider } from "./users/UsersProvider"
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
import { WeatherProvider } from "./events/weather/WeatherProvider"
import { WeatherModal } from "./events/weather/WeatherModal"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>

      <UsersProvider>
        <FriendsProvider>
          <Route exact path="/friends">
            <FriendList />
          </Route>

          <Route exact path="/friends/add/:userId(\d+)">
            <FriendConfirm />
          </Route>
        </FriendsProvider>
      </UsersProvider>

          <FriendsProvider>
            <UsersProvider>
              <NewsArticleProvider>
                <Route exact path="/">
                  <NewsArticleList />
                </Route>
                <Route path="/NewsArticleForm">
                  <NewsArticleForm />
                </Route>
                <Route exact path="/articles/edit/:articleId">
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
        <FriendsProvider>
          <UsersProvider>
            <WeatherProvider>
              <Route exact path="/events">
                <WeatherModal />
                <EventList />
              </Route>
              <Route path="/events/create">
                <EventForm />
                <EventList />
              </Route>
            </WeatherProvider>
          </UsersProvider>
        </FriendsProvider>
      </EventProvider>
    </>
  )
}
