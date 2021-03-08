/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides takes data from FriendList and,
 * returns an individual friend card
 **/
import React from "react"

export const FriendCard = ({friend}) => {
    return (
        <h3>{friend.user.name}</h3>
    )
}