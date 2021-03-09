// Author(s): Kaitlin
// Purpose: render list of articles 
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { FriendsContext } from "../friends/FriendsProvider"
import { UsersContext } from "../users/UsersProvider"
import { NewsArticleCard } from "./NewsArticleCard"
import { NewsArticleContext } from "./NewsArticleProvider"

export const NewsArticleList = () => {
    
    const { newsArticles, getNewsArticles } = useContext(NewsArticleContext)
    const { users, getUsers } = useContext(UsersContext)
    const { filteredFriends, getFriends } = useContext(FriendsContext)

    const [articleList, setArticleList] = useState()

    const history = useHistory()

    useEffect(() => {
        getUsers()
        .then(getFriends)
        .then(getNewsArticles)
    }, [])
    

    return (
        <article className="article">
            <h1>Articles</h1>
            <button className="btn--addArticle" onClick={() => {history.push("/NewsArticleForm")}}>New Article</button>
             {newsArticles.map(article => {
                 const currentUser = users.find(userObj => parseInt(sessionStorage.getItem("nutshell_user")) === userObj.id)
                // Call ArticleCard and pass in articles that have the user or friend ID?
                // debugger
                // debugger
                if(filteredFriends.length > 0){
                return filteredFriends.map(friend => {
                    // debugger
                    return article.userId === currentUser.id || article.userId === friend?.userId ? <NewsArticleCard key={article.id} article={article}/> : ""
                })} else {
                    return article.userId === currentUser.id ? <NewsArticleCard key={article.id} article={article}/> : ""
                }
             })
            }
        </article>
    )
}