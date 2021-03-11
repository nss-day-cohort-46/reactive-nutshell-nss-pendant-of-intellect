// Created by Alex Martin

// This module renders all events called from EventList.js to the DOM

import React, { useContext } from 'react'
import './EventCard.css'
import { EventContext } from './EventProvider'

export const EventCard = ({ event, isUpNext }) => {
    const { deleteEvent } = useContext(EventContext)
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    let author = "Created by me"
    let articleClass = "event"
    if (event.author.id !== currentUserId) {
        author = `Created by ${event.author.name}`
    }
    if (isUpNext) {
        articleClass += " next"
    }


    

    const handleClickDeleteButton = () => {
        deleteEvent(event.id)
    }


    return (
        <article className={articleClass}>
            <h2 className="event__name">{event.name}</h2>
            <p className="event__date">{event.date}</p>
            <p className="event__location">{event.city}, {event.state}</p>
            <h5 className="event__author">{author}</h5>
            <button className="event__weatherButton button">Show Weather</button>
            <button className="event__deleteButton button btn--delete"
                onClick={handleClickDeleteButton}>Delete Event</button>
        </article>
    )
}