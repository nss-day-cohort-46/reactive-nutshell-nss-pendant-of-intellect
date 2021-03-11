/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides takes data from FriendList and,
 * returns an individual friend card
 **/
import React, { useContext } from "react"
import { FriendsContext } from "./FriendsProvider"
import { UsersContext } from "../users/UsersProvider"
import "./Friends.css"

export const FriendCard = ({ friend }) => {
    const { removeFriend } = useContext(FriendsContext)
    const { getUsers } =useContext(UsersContext)
    const handleClickRemoveFriend = () => {
        removeFriend(friend.id)
        .then(getUsers)
    }
    return (
        <div className="friend">
            <h3>{friend.user.name}</h3>
            <button className="btn--delete" onClick={handleClickRemoveFriend}>Remove</button>
        </div>
    )
}