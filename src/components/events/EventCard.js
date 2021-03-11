// Created by Alex Martin

// This module renders all events called from EventList.js to the DOM
// also: determines if a weather button should be displayed based on if the event 
// is within the next 5 days from now.

// Also handles showing the modal

import React, { useContext, useEffect, useState } from 'react'
import './EventCard.css'
import { EventContext } from './EventProvider'
import { WeatherContext } from './weather/WeatherProvider'


export const EventCard = ({ event, isUpNext }) => {
    const { deleteEvent, setShowWeather, setWeatherEvent } = useContext(EventContext)
    const { getWeather } = useContext(WeatherContext)
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    let author = "Created by me"
    let articleClass = "event"
    
    
    // determine if event is not a user's own event, add styling
    if (event.author.id !== currentUserId) {
        author = `Created by ${event.author.name}`
        articleClass = "event friendEvent"
    }

    // add 'next' styling to event
    if (isUpNext) {
        articleClass = "event next"
    }




    const handleClickDeleteButton = () => {
        deleteEvent(event.id)
    }

    const handleClickWeatherButton = () => {
        getWeather(event.city, event.state)
        // toggle the modal render to something rather than nothing (false)
        setShowWeather(true)
        // set the state variable to one specific event
        setWeatherEvent(event)
    }

    // Determine if date is more than 5 days out (no weather button)
    if (new Date(event.date).getTime() - new Date().getTime() < 86400000 * 5
        &&
        // Determine if event has already happened (no weather button)
        new Date().getTime() - new Date(event.date).getTime() < 86400000) {
        showWeatherButton =
            <button className="event__weatherButton button"
                onClick={handleClickWeatherButton}>Show Weather</button>
    }

    return (
        <article className={articleClass}>
            <h2 className="event__name">{event.name}</h2>
            <p className="event__date">{event.date}</p>
            <p className="event__location">{event.city}, {event.state}</p>
            <h5 className="event__author">{author}</h5>
            {showWeatherButton}
            <button className="event__deleteButton button btn--delete"
                onClick={handleClickDeleteButton}>Delete Event</button>
        </article>
    )
}