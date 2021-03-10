// Created by Alex Martin

/* This functional component renders when a user navigates to /messages. It is responsible for handling the logic of checking
the current user against the userId of a message, handling the new message form, calling <MessageCard /> for each message.
*/


import React, { useContext, useEffect, useState } from 'react'
import { MessageCard } from './MessageCard'
import { MessageContext } from './MessageProvider'
import './MessageList.css'
import { UsersContext } from '../users/UsersProvider'

export const MessageList = () => {
    const { messages, getMessages, addMessage, notification } = useContext(MessageContext)
    const { users, getUsers } = useContext(UsersContext)
    const [newText, setNewText] = useState("")
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

    useEffect(() => {
        getUsers()
            .then(getMessages)
    }, [])
    
    useEffect(() => {
        getUsers()
            .then(getMessages)
    }, [notification])


    const handleChange = text => {
        setNewText(text)
    }

    const handleSend = () => {
        const newMessage = {
            userId: currentUserId,
            text: newText,
            timestamp: Date.now()
        }
        addMessage(newMessage)
        setNewText("")
    }

    return (
        <section className="messages">
            {
                messages.map(m => {
                    let currentUser = false
                    const user = users.find(u => u.id === m.userId)
                    if (currentUserId === m.userId) currentUser = true
                    return <MessageCard key={m.id} message={m} user={user} currentUser={currentUser} />
                })
            }
            <div className="newMessage">
                <textarea onChange={e => handleChange(e.target.value)} className="newMessage__text" rows="4" cols="50" value={newText}></textarea>
                <button className="button btn--create" onClick={handleSend}>Send</button>
            </div>
        </section>
    )
}