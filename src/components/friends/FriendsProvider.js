/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides FRIENDS data to the app.
 **/

import React, {useState, createContext } from "react"

export const FriendsContext = createContext()

export const FriendsProvider = (props) => {

    const [friends, setFriends] = useState([])

    const getFriends = () => {
        return fetch("http://localhost:8088/friends?_expand=user")
        .then(res => res.json())
        .then(setFriends)
    }


    return (
        <FriendsContext.Provider value={{
            friends, getFriends
        }}>
            {props.children}
        </FriendsContext.Provider>
    )
}