// Created by Alex Martin

// Handles state variable for events as well as all API communication for events

import React, { createContext, useState } from 'react'

export const EventContext = createContext()

export const EventProvider = props => {
    const [events, setEvents] = useState([])

    const getEvents = () => {
        return fetch(`http://localhost:8088/events`)
            .then(res => res.json())
            .then(setEvents)
    }

    const addEvent = event => {
        return fetch(`http://localhost:8088/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getEvents)
    }

    const deleteEvent = id => {
        return fetch(`http://localhost:8088/events/${id}`, {
            method: "DELETE"
        })
            .then(getEvents)
    }

    const editEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getEvents)
    }

    return (
        <EventContext.Provider value={{
            events, getEvents, addEvent, deleteEvent, editEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}