// Author(s): All
// Purpose: render list of current user's articles and current user's friends' articles 
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { FriendsContext } from "../friends/FriendsProvider"
import { UsersContext } from "../users/UsersProvider"
import { NewsArticleCard } from "./NewsArticleCard"
import { NewsArticleContext } from "./NewsArticleProvider"

export const NewsArticleList = () => {

    const { newsArticles, getNewsArticles } = useContext(NewsArticleContext)
    const { users, getUsers } = useContext(UsersContext)
    // debugger
    const { filteredFriends, getFriends } = useContext(FriendsContext)


    const history = useHistory()

    const [articlesToRender, setArticlesToRender] = useState([])

    useEffect(() => {
        // debugger
        getUsers()
        .then(getFriends)
        .then(getNewsArticles)

    }, [])

    useEffect(() => {
        let friendArticles = []
        let filteredArticles = []
        let currentUserArticles = []
        // returns an array of the articles that were posted by the current user
        const articles = [...newsArticles]
        currentUserArticles = articles.filter(article => {
            const currentUser = users.find(userObj => parseInt(sessionStorage.getItem("nutshell_user")) === userObj.id)
            return article.userId === currentUser.id
        })
        // returns an array of articles posted by the current user's friends (Used .flat to un-nest array)
        friendArticles = filteredFriends.map(friend => articles.filter(article => article.userId === friend.userId)).flat()
        
        // Concats array of current user's articles and array of friends' articles
        filteredArticles = friendArticles.concat(currentUserArticles)
        console.log("SET FILTERED ARTICLES", filteredArticles)

        // Sorts articles by timestamp in descending order
        setArticlesToRender(filteredArticles.sort(((firstArticle, nextArticle) => { return nextArticle.timestamp - firstArticle.timestamp })))
        console.log("articles after setArticles", articles)

    }, [newsArticles, filteredFriends, users])

    return (
        <article className="article">
            <h1>Articles</h1>
            <button className="btn--addArticle" onClick={() => { history.push("/NewsArticleForm") }}>New Article</button>
            {/* maps final list of sorted articles and renders to DOM finally */}
            {articlesToRender.map(article => {
                return <NewsArticleCard key={article.id} article={article} currentUserId={sessionStorage.nutshell_user}/>
            })}
        </article>
    )
}