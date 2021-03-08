import React, { useContext, useEffect } from 'react'
import { MessageCard } from './MessageCard'
import { MessageContext } from './MessageProvider'
import './MessageList.css'

export const MessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

    useEffect(() => {
        getMessages()
    }, [])

    return (
        <section className="messages">
            {
                messages.map(m => {
                    let currentUser = false
                    if (currentUserId === m.userId) currentUser = true
                    return <MessageCard key={messages.id} message={m} currentUser={currentUser}/>
                })
            }
            <div className="newMessage">
                <textarea className="newMessage__text" rows="4" cols="50"></textarea>
                <button className="btn--create">Send</button>
            </div>
        </section>
    )
}