import React from "react"

export const NewsArticleCard = ({article}) => {
    return (
        <section>
            <h2>{article.title}</h2>
            <div className="article__info">
                <p>{article.user.name}</p>
                <p>{article.timestamp}</p>
            </div>
            <p>{article.synopsis}</p>
            {/* Add conditional to make sure buttons only appear on loggedInUser's articles */}
            
           {parseInt(sessionStorage.getItem("nutshell_user")) === article.userId ? 
           <div className="article__buttons">
           <button className="btn--delete">Edit</button><button className="btn--delete">Delete</button></div> : ""}
            
        </section>
    )
}