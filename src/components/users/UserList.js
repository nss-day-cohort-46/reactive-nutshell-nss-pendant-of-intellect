/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides takes data fromt the user provider,
 * in order to search through all users
 **/

import React, { useContext, useEffect, useState } from "react"
import { UsersContext } from "./UsersProvider"
import { UserCard } from "./UserCard"
// import "./User.css"

export const UserList = () => {
    const [filteredUsers, setFilteredUsers] = useState([])

    const { users, getUsers } = useContext(UsersContext)

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        setFilteredUsers(filterUsers())
    }, [users])

    const filterUsers = () => {
        return users.filter(user => user.id !== parseInt(sessionStorage.nutshell_user))
    }
    
    return (
        <>
            <h1>All Users (exluding currentUser):</h1>
            {filteredUsers.map(user => <UserCard key={user.id} user={user}/>)}
        </>
    )
}
