//Created by Alex Martin

//This module is responsible for rendering date from individual message objects to the DOM, and will only be called from MessageList.js

import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import './MessageCard.css'
import { MessageContext } from './MessageProvider'

export const MessageCard = ({ message, user, currentUser }) => {
    const { deleteMessage } = useContext(MessageContext)

    let userButtons

    const handleDelete = () => {
        deleteMessage(message.id)
    }

    if (currentUser) {
        userButtons =
            <div className="message__buttons">
                <button className="button btn--edit">Edit</button>
                <button className="button btn--delete"
                    onClick={handleDelete}
                >Delete</button>
            </div>
    }
    return (
        <article className="message message--card">
            <div className="message_text">
                <Link to={`/friends/add/${user.id}`}>
                    <em>{user.name}:</em>
                </Link>
                {message.text}</div>
            <div className="message__info">
                <p className="message__info--timestamp">{new Date(message.timestamp).toLocaleString('en-US')}</p>
            </div>
            {userButtons}
        </article>
    )

}