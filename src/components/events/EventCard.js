// Created by Alex Martin

// This module renders all events called from EventList.js to the DOM

import React, { useContext, useEffect } from 'react'
import './EventCard.css'
import { EventContext } from './EventProvider'
import { WeatherContext } from './weather/WeatherProvider'

export const EventCard = ({ event, isNext }) => {
    const { deleteEvent } = useContext(EventContext)
    const { weather, getWeather } = useContext(WeatherContext)

    const handleClickDeleteButton = () => {
        deleteEvent(event.id)
    }

    const handleClickWeatherButton = () => {
        getWeather(event.city, event.state)
    }

    useEffect(() => {
        // console.log(weather)
    }, [weather])

    return (
        <article className={isNext ? "event next" : "event"}>
            <h2 className="event__name">{event.name}</h2>
            <p className="event__date">{event.date}</p>
            <p className="event__location">{event.city}, {event.state}</p>
            <button className="event__weatherButton button"
                onClick={handleClickWeatherButton}>Show Weather</button>
            <button className="event__deleteButton button btn--delete"
                onClick={handleClickDeleteButton}>Delete Event</button>
        </article>
    )
}