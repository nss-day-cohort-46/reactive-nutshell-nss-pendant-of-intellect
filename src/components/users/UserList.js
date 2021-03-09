/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides takes data fromt the user provider,
 * in order to search through all users
 **/

import React, { useContext, useEffect, useState } from "react"
import { UsersContext } from "./UsersProvider"
import { UserSearch } from "./UserSearch"
import { UserCard } from "./UserCard"
// import "./User.css"

export const UserList = () => {
    const [filteredUsers, setFilteredUsers] = useState([])

    const { users, getUsers, searchTerms } = useContext(UsersContext)

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        if(searchTerms !== "") {
            const subset = otherUsers.filter(user => user.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFilteredUsers(subset)
        }else{
            setFilteredUsers(otherUsers)
        }
    }, [searchTerms, users])

    const otherUsers = users.filter(user => user.id !== parseInt(sessionStorage.nutshell_user))

    
    return (
        <>
            <h1>Users:</h1>
            <UserSearch />
            {filteredUsers.map(user => <UserCard key={user.id} user={user}/>)}
        </>
    )
}
