// Kaitlin
// Build HTML for each article
import React, { useContext } from "react"
import { NewsArticleContext} from "./NewsArticleProvider"
import "./NewsArticleCard.css"

export const NewsArticleCard = ({article, currentUserId}) => {
    
    const {deleteNewsArticle} = useContext(NewsArticleContext)

    const handleDeleteClick = (event) => {
        deleteNewsArticle(article.id)
    }
    return (
        <section className={parseInt(currentUserId )=== article.userId ? "currentUser" : "friend"}>
            <h2>{article.title}</h2>
            <div className="article__info">
                <p>Posted By {article.user.name} on {new Date(article.timestamp).toLocaleString().split(',')[0]}</p>
            </div>
            <p>Synopsis: {article.synopsis}</p>
            
            <button className="btn--readMore"><a href={article.url} target="_blank">Read Full Article</a></button>
           {parseInt(sessionStorage.getItem("nutshell_user")) === article.userId ? 
          <button className="btn--delete" onClick={event=> handleDeleteClick(event)}>Delete</button>: ""}
          
            
        </section>
    )
}

