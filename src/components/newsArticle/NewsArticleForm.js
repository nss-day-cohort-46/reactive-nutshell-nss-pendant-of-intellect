import React, { useState } from "react"

export const NewsArticleForm = () => {
    const [article, setArticle] = useState({
        "title": "",
        "synopsis": "",
        "url": ""
    })

    const handleChangeInput = event => {

    }
    return (

        <form>
            <h1>New Article</h1>
            <fieldset>
            <label htmlFor="article--title">Article Title</label>
            <input name="article--title" id="title" value={article.title} onChange={handleChangeInput}></input>
            </fieldset>

            <fieldset>
            <label htmlFor="article--synopsis">Synopsis</label>
            <input name="article--synopsis" id="synopsis" value={article.synopsis} onChange={handleChangeInput}></input>
            </fieldset>

            <fieldset>
            <label htmlFor="article--url">URL</label>
            <input name="article--url" id="url" value={article.url} onChange={handleChangeInput}></input>
            </fieldset>

            <button className="btn--saveArticle">Add Article</button>

        </form>
    )
}