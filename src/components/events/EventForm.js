// Created by Alex Martin

// This module is responsible for keeping track of a state variable that represents a new event, collecting
// info from the user about the new event, and saving the new event

import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { EventContext } from './EventProvider'

export const EventForm = () => {
    const { events, addEvent } = useContext(EventContext)
    const history = useHistory()

    const [event, setEvent] = useState({
        userId: parseInt(sessionStorage.getItem("nutshell_user")),
        name: "",
        date: "",
        city: "",
        state: ""
    })

    const [isLoading, setIsLoading] = useState(true)

    const handleControlledInputChange = e => {
        const newEvent = { ...event }
        let selectedVal = e.target.value
        newEvent[e.target.id] = selectedVal
        setEvent(newEvent)
    }

    const handleClickSaveEvent = e => {
        e.preventDefault()
        setIsLoading(true)
        addEvent(event)
        history.push('/events')
    }

    useEffect(() => {
        setIsLoading(false)
    }, [events])

    return (
        <>
        {/* We've changed the button in this form to "submit" the form rather than call the save function directly. */}
            <form className="eventForm" onSubmit={handleClickSaveEvent}>
                <h2 className="eventForm__title">Add New Event</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Event name:</label>
                        <input type="text" id="name" onChange={handleControlledInputChange} autoFocus className="form-control" placeholder="Event Name" value={event.name} required />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="date">Event date:</label>
                        <input type="date" id="date" onChange={handleControlledInputChange} className="form-control" placeholder="Event Name" value={event.date} required />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" onChange={handleControlledInputChange} className="form-control" placeholder="Event Name" value={event.city} required />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" onChange={handleControlledInputChange} className="form-control" placeholder="Event Name" value={event.state} required />
                    </div>
                </fieldset>
                <button className="button btn-create"
                    type="submit"
                    disabled={isLoading}>
                    Save Event
                </button>
            </form>
        </>
    )
}