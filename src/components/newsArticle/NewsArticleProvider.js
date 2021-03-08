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

    return (
        <NewsArticleContext.Provider value={{
            newsArticles, getNewsArticles
        }}>
            {props.children}
        </NewsArticleContext.Provider>
    )
}