import React from "react"
import { Route } from "react-router-dom"
import { MessageList } from "./messages/MessageList"
import { MessageProvider } from "./messages/MessageProvider"
import { NewsArticleForm } from "./newsArticle/NewsArticleForm"
import { NewsArticleList } from "./newsArticle/NewsArticleList"
import { NewsArticleProvider } from "./newsArticle/NewsArticleProvider"

export const ApplicationViews = () => {
  return (
    <>

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
