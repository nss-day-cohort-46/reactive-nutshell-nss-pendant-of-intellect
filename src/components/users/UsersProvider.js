/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides USERS data to the app.
 **/

import React, { useState, createContext, useEffect } from "react"

export const UsersContext = createContext()

export const UsersProvider = (props) => {

    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then(setUsers)
    }

    const getUserById = (userId) => {
        return fetch(`http://localhost:8088/users/${userId}`)
            .then(res => res.json())
    }

    return (
        <UsersContext.Provider value={{
            users, getUsers, getUserById
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}