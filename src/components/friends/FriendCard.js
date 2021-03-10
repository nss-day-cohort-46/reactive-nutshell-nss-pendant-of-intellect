/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides takes data from FriendList and,
 * returns an individual friend card
 **/
import React, { useContext } from "react"
import { FriendsContext } from "./FriendsProvider"


export const FriendCard = ({friend}) => {
    const { removeFriend } = useContext(FriendsContext)
    const handleClickRemoveFriend = () => {
        removeFriend(friend.id)
    }
    return (
        <div className="friend">
        <h3>{friend.user.name}</h3>
        <button className="btn--save" onClick={handleClickRemoveFriend}>Remove</button>
        </div>
    )
}