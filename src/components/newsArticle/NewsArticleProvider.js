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
        .then(() => console.log("articles in provider",newsArticles))
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

    const deleteNewsArticle = (articleId) => {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE",
        })
        .then(getNewsArticles)
    }

    return (
        <NewsArticleContext.Provider value={{
            newsArticles, getNewsArticles, addNewsArticle, deleteNewsArticle
        }}>
            {props.children}
        </NewsArticleContext.Provider>
    )
}