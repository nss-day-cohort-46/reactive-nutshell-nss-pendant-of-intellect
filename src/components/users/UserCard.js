/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides takes data from userList and,
 * returns an individual user card
 **/
import React from "react"

export const UserCard = ({ user }) => {
    return (
        <h3>{user.name}</h3>
    )
}