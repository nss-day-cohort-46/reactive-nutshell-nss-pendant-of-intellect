/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides FRIENDS data to the app.
 **/

import React, {useState, createContext, useEffect } from "react"

export const FriendsContext = createContext()

export const FriendsProvider = (props) => {

    const [allFriends, setAllFriends] = useState([])
    const [filteredFriends, setFilteredFriends] = useState([])

    const getFriends = () => {
        return fetch("http://localhost:8088/friends?_expand=user")
        .then(res => res.json())
        .then(setAllFriends)
    }

    useEffect(() => {
        setFilteredFriends(filterFriends())
    }, [allFriends])

    const filterFriends = () => {
        return allFriends.filter(friend => friend.currentUserId === parseInt(sessionStorage.nutshell_user))
    }

    return (
        <FriendsContext.Provider value={{
            filteredFriends, getFriends
        }}>
            {props.children}
        </FriendsContext.Provider>
    )
}