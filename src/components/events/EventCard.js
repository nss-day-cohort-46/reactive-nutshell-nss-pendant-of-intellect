import React, { useContext } from 'react'
import './EventCard.css'
import { EventContext } from './EventProvider'

export const EventCard = ({ event }) => {
    const { deleteEvent } = useContext(EventContext)

    const handleClickDeleteButton = () => {
        deleteEvent(event.id)
    }


    return (
        <article className="event">
            <h2 className="event__name">{event.name}</h2>
            <p className="event__date">{event.date}</p>
            <p className="event__location">{event.city}, {event.state}</p>
            <button className="event__weatherButton button">Show Weather</button>
            <button className="event__deleteButton button btn--delete"
                onClick={handleClickDeleteButton}>Delete Event</button>
        </article>
    )
}