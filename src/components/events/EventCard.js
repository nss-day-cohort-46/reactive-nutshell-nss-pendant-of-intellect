// Created by Alex Martin

// This module renders all events called from EventList.js to the DOM

import React from 'react'
import './EventCard.css'

export const EventCard = ({ event }) => {
    return (
        <article className="event">
            <h2 className="event__name">{event.name}</h2>
            <p className="event__date">{event.date}</p>
            <p className="event__location">{event.city}, {event.state}</p>
            <button className="event__weatherButton button">Show Weather</button>
        </article>
    )
}