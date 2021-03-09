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

    const history = useHistory()

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getUsers()
        .then(getNewsArticles)
        .then(getFriends)
        .then(console.log(newsArticles))
    }, [])

    useEffect(() => {
        setArticles(newsArticles.sort(((firstArticle, nextArticle) => {return nextArticle.timestamp - firstArticle.timestamp})))
    }, [newsArticles])
    

    return (
        <article className="article">
            <h1>Articles</h1>
            <button className="btn--addArticle" onClick={() => {history.push("/NewsArticleForm")}}>New Article</button>
             
            {articles.map(article => {
                 const currentUser = users.find(userObj => parseInt(sessionStorage.getItem("nutshell_user")) === userObj.id)

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