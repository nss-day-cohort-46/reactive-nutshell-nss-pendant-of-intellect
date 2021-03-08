import React, { useContext, useEffect, useState } from 'react'
import { MessageCard } from './MessageCard'
import { MessageContext } from './MessageProvider'
import './MessageList.css'

export const MessageList = () => {
    const { messages, getMessages, addMessage } = useContext(MessageContext)
    const [newText, setNewText] = useState("")
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    let newMessageForm

    useEffect(() => {
        getMessages()
    }, [])

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

    if (currentUserId) {
        newMessageForm =
            <div className="newMessage">
                <textarea onChange={e => handleChange(e.target.value)} className="newMessage__text" rows="4" cols="50" value={newText}></textarea>
                <button className="button btn--create" onClick={handleSend}>Send</button>
            </div>
    }

    return (
        <section className="messages">
            {
                messages.map(m => {
                    let currentUser = false
                    if (currentUserId === m.userId) currentUser = true
                    return <MessageCard key={messages.id} message={m} currentUser={currentUser} />
                })
            }
            {newMessageForm}
        </section>
    )
}