// Kaitlin
// Build HTML for each article
import React, { useContext } from "react"
import { NewsArticleContext} from "./NewsArticleProvider"


export const NewsArticleCard = ({article}) => {
    const {deleteNewsArticle} = useContext(NewsArticleContext)

    const handleDeleteClick = (event) => {
        deleteNewsArticle(article.id)
    }
    
    return (
        <section>
            <h2>{article.title}</h2>
            <div className="article__info">
                <p>{article.user.name}</p>
                <p>{new Date(article.timestamp).toLocaleString()}</p>
            </div>
            <p>{article.synopsis}</p>
            
           {parseInt(sessionStorage.getItem("nutshell_user")) === article.userId ? 
           
          <button className="btn--delete" onClick={event=> handleDeleteClick(event)}>Delete</button>: ""}
            
        </section>
    )
}