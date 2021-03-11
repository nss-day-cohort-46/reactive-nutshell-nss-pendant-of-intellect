//Created by Alex Martin
// Edited by Kaitlin to add edit functionality

//This module is responsible for rendering date from individual message objects to the DOM, and will only be called from MessageList.js

import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import './MessageCard.css'
import { MessageContext } from './MessageProvider'

export const MessageCard = ({ message, user, currentUser }) => {
    const { getMessageById, deleteMessage, editMessage, getMessages } = useContext(MessageContext)

    const history = useHistory()

    const [messageToEdit, setmessageToEdit] = useState(
        {
            userId: 0,
            text: "",
            timestamp: 0,
            editTimestamp: 0
        }
    )

    const [editClicked, setEditClicked] = useState(false)
    // const [nevermind, setNevermind] = useState(false)

    let userButtons

    const handleDelete = () => {
        deleteMessage(message.id)
    }

    const handleEdit = () => {
        getMessageById(message.id)
            .then(msgObj => setmessageToEdit(msgObj))
    }

    const handleChangeInput = (event) => {
        const newMessageToEdit = {...messageToEdit}
        newMessageToEdit.text = event.target.value
        setmessageToEdit(newMessageToEdit)
    }

    const handleSave = () => {
        const newMessageToEdit = {...messageToEdit}
        newMessageToEdit.editTimestamp = Date.now()
        editMessage(newMessageToEdit)
    }
    
//    useEffect(() => {
//        if (nevermind) {

//        }

//    }, [])

    if (currentUser) {
        userButtons =
            <div className="message__buttons">
                {editClicked ? <button className="button btn--save" onClick={() => {handleSave(); setEditClicked(false)}} id={`${message.id}`}>Save</button> 
                : <button className="button btn--edit" onClick={() => {handleEdit(); setEditClicked(true)}} id={`${message.id}`}>Edit</button>}
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
                {editClicked ? 
                <><input type="text" value={messageToEdit.text} onChange={event => handleChangeInput(event)}></input> <button className="btn--nevermind" onClick={() =>{setEditClicked(false)}}>Nevermind</button></>
                : message.text}</div>
            <div className="message__info">
                <p className="message__info--timestamp">{message.editTimestamp > 0 ? `(edited)${new Date(message.editTimestamp).toLocaleString('en-US')}` 
                : new Date(message.timestamp).toLocaleString('en-US')}</p>
            </div>
            {userButtons}
        </article>
    )

}