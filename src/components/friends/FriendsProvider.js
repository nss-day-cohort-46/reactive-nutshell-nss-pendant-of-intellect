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

    const filterFriends = () => {
        return friends.filter(friend => friend.currentUserId === parseInt(sessionStorage.nutshell_user))
    }

    useEffect(() => {
        setFilteredFriends(filterFriends())
    }, [friends])

    return (
        <FriendsContext.Provider value={{
            friends, filteredFriends, getFriends
        }}>
            {props.children}
        </FriendsContext.Provider>
    )
}