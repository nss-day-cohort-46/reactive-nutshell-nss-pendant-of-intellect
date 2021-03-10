/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides FRIENDS data to the app.
 **/

import React, { useState, createContext, useEffect } from "react"

export const FriendsContext = createContext()

export const FriendsProvider = (props) => {

    // Manages the state of all Friends realtionships from the database
    const [friends, setFriends] = useState([])
    // Manages state of friends of the current user
    const [filteredFriends, setFilteredFriends] = useState([])

    const getFriends = () => {
        return fetch("http://localhost:8088/friends?_expand=user")
            .then(res => res.json())
            .then(setFriends)
    }

    const addFriends = (friendObj) => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendObj)
        })
            .then(getFriends)
    }

    const removeFriend = relationshipId => {
        return fetch(`http://localhost:8088/friends/${relationshipId}`, {
            method: "DELETE"
        })
            .then(getFriends)
    }

    const filterFriends = () => {
        return friends.filter(friend => friend.currentUserId === parseInt(sessionStorage.nutshell_user))
    }

    useEffect(() => {
        setFilteredFriends(filterFriends())
    }, [friends])

    return (
        <FriendsContext.Provider value={{
            friends, filteredFriends, getFriends, addFriends, removeFriend
        }}>
            {props.children}
        </FriendsContext.Provider>
    )
}