/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides takes data fromt the user provider,
 * in order to search through all users
 **/

import React, { useContext, useEffect, useState } from "react"
import { FriendsContext } from "../friends/FriendsProvider"
import { UsersContext } from "./UsersProvider"
import { UserSearch } from "./UserSearch"
import { UserCard } from "./UserCard"
// import "./User.css"

export const UserList = () => {
    const [filteredUsers, setFilteredUsers] = useState([])
    const { filteredFriends, getFriends } = useContext(FriendsContext)

    const { users, getUsers, searchTerms } = useContext(UsersContext)

    useEffect(() => {
        getFriends()
        .then(getUsers)
    }, [])
    

    useEffect(() => {
        if(searchTerms !== "") {
            const subset = otherUsers().filter(user => user.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFilteredUsers(subset)
        }else{
            setFilteredUsers(otherUsers())
        }
    }, [searchTerms, users])

    const otherUsers = () => {
        let isFriends = false
        return users.filter(user => {
            const friendCheck = filteredFriends.find(f => f.userId === user.id)
            if (friendCheck !== undefined) {
                user.isFriends = true
            } else {
                user.isFriends = isFriends
            }
            return user.id !== parseInt(sessionStorage.nutshell_user)
        })
    }

    const render = () => {
        if (searchTerms !== "") {
            return filteredUsers.map(user => <UserCard key={user.id} user={user}/>)
        }
    }

    return (
        <>
            <h1>Find Friends:</h1>
            <UserSearch />
            {render()}
        </>
    )
}
