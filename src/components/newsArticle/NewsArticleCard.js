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
        <section className={parseInt(currentUserId) === article.userId ? "currentUser" : "friend"}>
            <h2>{article.title}</h2>
            <div className="article__info">
                <p>Posted By {article.user.name} on {new Date(article.timestamp).toLocaleString().split(',')[0]}</p>
            </div>
            <p>Synopsis: {article.synopsis}</p>

            <button className="btn--readMore"><a href={article.url} target="_blank">Read Full Article</a></button>
            {parseInt(sessionStorage.getItem("nutshell_user")) === article.userId ?
                <div>
                    <button className="btn--delete" onClick={() => handleDeleteClick()}>Delete</button>
                    <button className="btn--edit" onClick={() => history.push(`/articles/edit/${article.id}`)}>Edit</button>
                </div>
                : ""}


        </section>
    )
}

