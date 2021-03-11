// Kaitlin
// Build HTML for each article
import React, { useContext } from "react"
import { NewsArticleContext } from "./NewsArticleProvider"
import "./NewsArticleCard.css"
import { useHistory } from "react-router"

export const NewsArticleCard = ({ article, currentUserId }) => {

    const { deleteNewsArticle } = useContext(NewsArticleContext)
    const history = useHistory()

    const handleDeleteClick = () => deleteNewsArticle(article.id)
    
    return (
        <section className={parseInt(currentUserId) === article.userId ? "currentUser" : "friendArticle"}>
            <h2 className="article__header">{article.title}</h2>
            <div className="article__info">
                <p className="article__userInfo">Posted By {article.user.name} on {new Date(article.timestamp).toLocaleString().split(',')[0]}</p>
            </div>
            <p className="article__synopsis">Synopsis: {article.synopsis}</p>

            <button className="btn--readMore"><a href={article.url} target="_blank">Read Full Article</a></button>
            {parseInt(sessionStorage.getItem("nutshell_user")) === article.userId ?
                <div>
                    <button className="btn--delete deleteArticle" onClick={() => handleDeleteClick()}>Delete</button>
                    <button className="btn--edit editArticle" onClick={() => history.push(`/articles/edit/${article.id}`)}>Edit</button>
                </div>
                : ""}


        </section>
    )
}

