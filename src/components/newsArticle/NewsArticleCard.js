// Kaitlin
// Build HTML for each article
import React from "react"

export const NewsArticleCard = ({article}) => {
    // debugger
    return (
        <section>
            <h2>{article.title}</h2>
            <div className="article__info">
                <p>{article.user.name}</p>
                <p>{new Date(article.timestamp).toLocaleString()}</p>
            </div>
            <p>{article.synopsis}</p>
            
           {parseInt(sessionStorage.getItem("nutshell_user")) === article.userId ? 
           
          <button className="btn--delete">Delete</button>: ""}
            
        </section>
    )
}