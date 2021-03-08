//Created by Alex Martin

//This module is responsible for rendering date from individual message objects to the DOM, and will only be called from MessageList.js

import React from 'react'

export const MessageCard = ({ message }) => {
    return (
        <article className="message">
            <div className="message__info">
                <h4 className="message__info--userName">User ID: {message.userId}</h4>
                <p className="message__info--timestamp">{new Date(message.timestamp).toLocaleString('en-US')}</p>
            </div>
            <div className="message_text">{message.text}</div>
            <div className="message_buttons">
                <button className="btn--edit">Edit</button>
                <button className="btn--delete">Delete</button>
            </div>
        </article>
    )

}