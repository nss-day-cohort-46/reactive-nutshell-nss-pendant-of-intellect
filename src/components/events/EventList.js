import React, { useContext, useEffect, useState } from 'react'
import { EventCard } from './EventCard'
import { EventContext } from './EventProvider'

export const EventList = () => {
    const { events, getEvents } = useContext(EventContext)
    const [sortedEvents, setSortedEvents] = useState([])
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

    useEffect(() => {
        getEvents()
    }, [])

    useEffect(() => {
        const userEvents = events.filter(e => e.userId === currentUserId)
        const sortedByDate = userEvents.sort((a, b) => {
            return (new Date(a.date).valueOf() - new Date(b.date).valueOf())
        })
        setSortedEvents(sortedByDate)
    }, [events])

    return (
        <section className="events">
            {
                sortedEvents.map(event => {
                    return <EventCard key={event.id} event={event} />
                })
            }
        </section>
    )
}