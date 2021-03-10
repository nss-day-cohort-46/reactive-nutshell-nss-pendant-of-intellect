// Kaitlin
// Allows user to submit a new article and saves article to database
import React, { useContext, useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { NewsArticleContext } from "./NewsArticleProvider"

export const NewsArticleForm = () => {
    const {getNewsArticles, addNewsArticle, updateNewsArticle, getNewsArticleById} = useContext(NewsArticleContext)

    const history = useHistory()

    const {articleId} = useParams("articleId")
    console.log('articleId: ', articleId);

    const [article, setArticle] = useState({
        "title": "",
        "synopsis": "",
        "url": "",
        "timestamp": 0,
        "userId": 0
    })

    const handleChangeInput = event => {
        const newArticle = {...article}
        // debugger
        newArticle[event.target.id] = event.target.value
        newArticle.userId = parseInt(sessionStorage.getItem("nutshell_user"))
        newArticle.timestamp = Date.now()
        setArticle(newArticle)
    }

    const handleSaveClick = () => {
        if (article.title !== "" && article.synopsis !== "" && article.url !== "") {
            // addNewsArticle(article)
            history.push(`/`)
        } else {
            window.alert("Please complete all fields")
        }
        // if () {}
    }

    useEffect(() => {
        // getNewsArticles()
        // .then(() => {
            if(articleId) {
            getNewsArticleById(articleId)
            .then(articleObj => setArticle(articleObj))    
        }
    // })
    }, [])
    // debugger
    return (

        <form>
            <h1>New Article</h1>
            <fieldset>
            <label htmlFor="article--title">Article Title</label>
            {console.log(article)}
            <input type="text" name="article--title" id="title" value={article.title} onChange={event => handleChangeInput(event)}></input>
            </fieldset>

            <fieldset>
            <label htmlFor="article--synopsis">Synopsis</label>
            <textarea type= "text" name="article--synopsis" id="synopsis" value={article.synopsis} onChange={event => handleChangeInput(event)}></textarea>
            </fieldset>

            <fieldset>
            <label htmlFor="article--url">URL</label>
            <input type="text" name="article--url" id="url" value={article.url} onChange={event => handleChangeInput(event)}></input>
            </fieldset>

            <button className="btn--saveArticle" onClick={event => {
            event.preventDefault()
            handleSaveClick()
            }}>Add Article</button>

        </form>
    )
}