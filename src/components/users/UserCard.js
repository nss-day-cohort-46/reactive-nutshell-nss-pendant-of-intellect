/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides takes data from userList and,
 * returns an individual user card
 **/
import React from "react"

export const UserCard = ({ user }) => {
    return (
        <div className="user">
        <h3>{user.name}</h3>
        {user.isFriends ? <button className="btn--delete">Remove</button> : <button className="btn--save">Add</button>}
        <div>Friends? {user.isFriends ? "yes" : "no"} </div>
        </div>
    )
}