import React from "react"
import { Route } from "react-router-dom"
import { NewsArticleList } from "./newsArticle/NewsArticleList"
import { NewsArticleProvider } from "./newsArticle/NewsArticleProvider"

export const ApplicationViews = () => {
  return (
    <>

      <NewsArticleProvider>
        <Route exact path="/">
          <NewsArticleList />
        </Route>
        <Route exact path="/NewsArticleForm">
          
        </Route>
      </NewsArticleProvider>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
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
