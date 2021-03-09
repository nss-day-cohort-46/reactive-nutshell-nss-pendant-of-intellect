// Kaitlin
// Build HTML for each article
import React from "react"

export const NewsArticleCard = ({article}) => {
    return (
        <section>
            <h2>{article.title}</h2>
            <div className="article__info">
                <p>{article.user.name}</p>
                <p>{new Date(article.timestamp).toLocaleString()}</p>
            </div>
            <p>{article.synopsis}</p>
            
           {parseInt(sessionStorage.getItem("nutshell_user")) === article.userId ? 
           <div className="article__buttons">
           <button className="btn--delete">Edit</button><button className="btn--delete">Delete</button></div> : ""}
            
        </section>
    )
}