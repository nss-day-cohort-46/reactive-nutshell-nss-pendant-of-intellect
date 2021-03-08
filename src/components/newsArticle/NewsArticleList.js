// Author(s): Kaitlin
// Purpose: render list of articles 
import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { NewsArticleContext } from "./NewsArticleProvider"

export const NewsArticleList = () => {
    
    const { newsArticles, getNewsArticles } = useContext(NewsArticleContext)

    const history = useHistory()

    useEffect(() => {
        getNewsArticles()
        // .then(getUserFriends) Waiting for Dan's code in User provider
    }, [])

    return (
        <article className="article">
            <h1>Articles</h1>
            <button className="btn--addArticle" onClick={history.push("/NewsArticleForm")}>Add Article</button>
        </article>
    )
}