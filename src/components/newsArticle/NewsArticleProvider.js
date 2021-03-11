// Kaitlin
// gets data fom API
import React, { createContext, useState } from "react"

export const NewsArticleContext = createContext()

// This component establishes what data can be used.
export const NewsArticleProvider = (props) => {
    const [newsArticles, setNewsArticles] = useState([])

    const getNewsArticles = () => {
        return fetch("http://localhost:8088/articles?_expand=user")
        .then(res => res.json())
        .then(setNewsArticles)
    }

    const getNewsArticleById = (articleId) => {
        // debugger
        return fetch(`http://localhost:8088/articles/${articleId}`)
        .then(res => res.json())
        // .then(res => console.log("got the article by id", res))
    }

    const addNewsArticle = (articleObj) => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleObj)
        })
        .then(getNewsArticles)
    }

    const updateNewsArticle = articleObj => {
        return fetch(`http://localhost:8088/articles/${articleObj.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(articleObj)
        })
          .then(getNewsArticles)
      }

    const deleteNewsArticle = (articleId) => {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE",
        })
        .then(getNewsArticles)
    }

    return (
        <NewsArticleContext.Provider value={{
            newsArticles, getNewsArticles, addNewsArticle, deleteNewsArticle, 
            updateNewsArticle, getNewsArticleById
        }}>
            {props.children}
        </NewsArticleContext.Provider>
    )
}