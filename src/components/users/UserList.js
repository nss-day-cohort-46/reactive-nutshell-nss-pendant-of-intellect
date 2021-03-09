/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides takes data fromt the user provider,
 * in order to search through all users
 **/

import React, { useContext, useEffect, useState } from "react"
import { FriendsContext } from "../friends/FriendsProvider"
import { UsersContext } from "./UsersProvider"
import { UserCard } from "./UserCard"
// import "./User.css"

export const UserList = () => {
    const [filteredUsers, setFilteredUsers] = useState([])
    const { filteredFriends, getFriends } = useContext(FriendsContext)

    const { users, getUsers } = useContext(UsersContext)

    useEffect(() => {
        getFriends()
        .then(getUsers)
    }, [])
    

    useEffect(() => {
        setFilteredUsers(filterUsers())
    }, [users])
    
    const filterUsers = () => {
        let isFriends = false
        return users.filter(user => {
            const friendCheck = filteredFriends.find(f => f.userId === user.id)
            if ( friendCheck !== undefined) {
                user.isFriends = true
            } else {
                user.isFriends = isFriends
            }
            return user.id !== parseInt(sessionStorage.nutshell_user)})
    }

    return (
        <>
            <h1>All Users (exluding currentUser):</h1>
            <div className="users">
                {filteredUsers.map(user => <UserCard key={user.id} user={user} />)}
            </div>
        </>
    )
}
