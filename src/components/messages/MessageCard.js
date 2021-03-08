//Created by Alex Martin

//This module is responsible for rendering date from individual message objects to the DOM, and will only be called from MessageList.js

import React from 'react'
import './MessageCard.css'

export const MessageCard = ({ message, currentUser }) => {
    let userButtons
    if (currentUser) {
        userButtons =
            <div className="message__buttons">
                <button className="button btn--edit">Edit</button>
                <button className="button btn--delete">Delete</button>
            </div>
    }
    return (
        <article className="message message--card">
            <div className="message_text">{message.text}</div>
            <div className="message__info">
                <p className="message__info--userName">User ID: {message.userId}</p>
                <p className="message__info--timestamp">{new Date(message.timestamp).toLocaleString('en-US')}</p>
            </div>
            {userButtons}
        </article>
    )

}