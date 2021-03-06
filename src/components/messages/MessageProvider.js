// Created by Alex Martin

// This data provider handles the state variable of "messages" as well as provides all regular CRUD methods via the MessageContext

import React, { createContext, useState } from 'react'

export const MessageContext = createContext()

export const MessageProvider = props => {
    const [messages, setMessages] = useState([])

    const getMessages = () => {
        return fetch(`http://localhost:8088/messages`)
            .then(res => res.json())
            .then(setMessages)
    }

    const getMessageById = messageId => {
        return fetch(`http://localhost:8088/messages/${messageId}`)
            .then(res => res.json())
    }

    const addMessage = message => {
        return fetch(`http://localhost:8088/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(getMessages)
    }

    const editMessage = message => {
        return fetch(`http://localhost:8088/messages/${message.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(getMessages)
    }

    const deleteMessage = id => {
        return fetch(`http://localhost:8088/messages/${id}`, {
            method: "DELETE"
        })
            .then(getMessages)
    }

    return (
        <MessageContext.Provider value={{
            messages, getMessages, addMessage, editMessage, deleteMessage, getMessageById
        }}>
            {props.children}
        </MessageContext.Provider>
    )
}