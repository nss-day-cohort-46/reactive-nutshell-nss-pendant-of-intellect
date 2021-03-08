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
    const { filteredFriends, getFriends } = useContext(FriendsContext)

    useEffect(() => {
        getFriends()
    }, [])

    return (
        <>
            <h1>Friends: </h1>
            {console.log(sessionStorage.nutshell_user)}
            {filteredFriends.map(friend => <FriendCard key={friend.id} friend={friend}/>)}
        </>
    )
}
