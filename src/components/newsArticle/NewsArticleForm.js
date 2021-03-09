import React, { useContext, useState } from "react"
import { useHistory } from "react-router"
import { NewsArticleContext } from "./NewsArticleProvider"

export const NewsArticleForm = () => {
    const {addNewsArticle} = useContext(NewsArticleContext)

    const history = useHistory()

    const [article, setArticle] = useState({
        "title": "",
        "synopsis": "",
        "url": "",
        "timestamp": 0,
        "userId": 0
    })

    const handleChangeInput = event => {
        const newArticle = {...article}
        const timestamp = Date.now()
        // debugger
        newArticle[event.target.id] = event.target.value
        newArticle.userId = parseInt(sessionStorage.getItem("nutshell_user"))
        newArticle.timestamp = new Date(timestamp).toLocaleString()
        setArticle(newArticle)
    }

    const handleSaveClick = () => {
        if (article.title !== "" && article.synopsis !== "" && article.url !== "") {
            addNewsArticle(article)
            history.push(`/`)
        } else {
            window.alert("Please complete all fields")
        }
    }

    return (

        <form>
            <h1>New Article</h1>
            <fieldset>
            <label htmlFor="article--title">Article Title</label>
            <input type="text" name="article--title" id="title" value={article.title} onChange={event => handleChangeInput(event)}></input>
            </fieldset>

            <fieldset>
            <label htmlFor="article--synopsis">Synopsis</label>
            <textarea type= "text" name="article--synopsis" id="synopsis" value={article.synopsis} onChange={handleChangeInput}></textarea>
            </fieldset>

            <fieldset>
            <label htmlFor="article--url">URL</label>
            <input type="text" name="article--url" id="url" value={article.url} onChange={handleChangeInput}></input>
            </fieldset>

            <button className="btn--saveArticle" onClick={event => {
            event.preventDefault()
            handleSaveClick()
            }}>Add Article</button>

        </form>
    )
}