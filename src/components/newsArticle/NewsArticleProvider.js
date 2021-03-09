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

    return (
        <NewsArticleContext.Provider value={{
            newsArticles, getNewsArticles, addNewsArticle
        }}>
            {props.children}
        </NewsArticleContext.Provider>
    )
}