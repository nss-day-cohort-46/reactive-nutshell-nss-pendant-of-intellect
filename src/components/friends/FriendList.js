/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides takes data fromt the friend provider,
 * passes it to FriendCard, then renders FriendCard for each friend.
 **/

import React, { useContext, useEffect, useState } from "react"
import { FriendsContext } from "./FriendsProvider"
import { FriendCard } from "./FriendCard"
// import "./Friend.css"

export const FriendList = () => {

    // Manages state of friends of the current user
    const [filteredFriends, setFilteredFriends] = useState([])

    const { friends, getFriends } = useContext(FriendsContext)

    useEffect(() => {
        getFriends()
    }, [])

    useEffect(() => {
        setFilteredFriends(filterFriends())
    }, [friends])

    const filterFriends = () => {
        return friends.filter(friend => friend.currentUserId === parseInt(sessionStorage.nutshell_user))
    }

    return (
        <>
            <h1>My Friends: </h1>
            {filteredFriends.map(friend => <FriendCard key={friend.id} friend={friend} />)}
        </>
    )
}
