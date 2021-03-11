// Created by Alex Martin

// called when a user clicks on "Events" in the NavBar, this module gets all events, filters them down to only events
// the user should see, then sorts them chronologically by event date. That's then mapped out into Event Cards.

import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { EventCard } from './EventCard'
import { EventContext } from './EventProvider'
import './EventList.css'
import { FriendsContext } from '../friends/FriendsProvider'
import { UsersContext } from '../users/UsersProvider'

export const EventList = () => {
    const { events, getEvents } = useContext(EventContext)
    const { friends, getFriends } = useContext(FriendsContext)
    const { users, getUsers } = useContext(UsersContext)
    const [sortedEvents, setSortedEvents] = useState([])
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    const history = useHistory()

    useEffect(() => {
        getEvents()
            .then(getFriends)
            .then(getUsers)
    }, [])

    useEffect(() => {
        const friendBridges = friends.filter(f => f.currentUserId === currentUserId)
        const friendsArray = friendBridges.map(f => f.userId)
        const friendsEvents = friendsArray.map(f => {
            return events.filter(e => e.userId === f)
        }).flat()
        const userEvents = events.filter(e => e.userId === currentUserId)
        const displayEvents = [...userEvents, ...friendsEvents]
        const sortedByDate = displayEvents.sort((a, b) => {
            return (new Date(a.date).valueOf() - new Date(b.date).valueOf())
        })
        const eventsWithAuthors = sortedByDate.map(s => {
            const author = users.find(u => u.id === s.userId)
            s.author = author
            return s
        })
        setSortedEvents(eventsWithAuthors)
    }, [events, friends, users])

    return (
        <section className="events">
            <button onClick={() => history.push(`/events/create`)} id="addEventButton" className="button btn-create">Add an Event</button>
            {
                sortedEvents.map(event => {
                    const upNext = sortedEvents.filter(event => {
                        const rightNow = Date.now()
                        return new Date(event.date).valueOf() > rightNow
                    })[0]
                    const special = event === upNext
                    if (event.author) return <EventCard key={event.id} event={event} special={special}/>
                })
            }
        </section>
    )
}