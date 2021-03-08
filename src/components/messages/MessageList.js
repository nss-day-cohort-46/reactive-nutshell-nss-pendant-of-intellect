import React, { useContext, useEffect } from 'react'
import { MessageCard } from './MessageCard'
import { MessageContext } from './MessageProvider'

export const MessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)

    useEffect(() => {
        getMessages()
    }, [])

    return (
        <section className="messages">
            {
                 messages.map(m => <MessageCard key={messages.id} message={m}/>)
            }
        </section>
    )
}