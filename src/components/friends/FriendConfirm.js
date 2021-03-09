/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module confirms that a user wants to add another user as a friend
 **/

import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { FriendsContext } from "./FriendsProvider"
import { UsersContext } from "../users/UsersProvider"

export const FriendConfirm = () => {
    const [user, setUser] = useState({})
    const { addFriends } = useContext(FriendsContext)
    const { getUserById } = useContext(UsersContext)
    const { userId } = useParams()

    useEffect(() => {
        getUserById(userId)
        .then((response) => {
            setUser(response)
        })
    }, [])

    const handleClickAddFriend = (event) => {
        console.log(event.target)
    }

    return (
        <>
        Add {user.name} as a friend?

        <button className="btn--save" onClick={handleClickAddFriend}>CONFIRM</button>
        {/* <button className="btn--save" onClick={}>CANCEL</button> */}
        </>
    )
}