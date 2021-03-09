/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module confirms that a user wants to add another user as a friend
 **/

import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams, Link } from 'react-router-dom';
import { FriendsContext } from "./FriendsProvider"
import { UsersContext } from "../users/UsersProvider"

export const FriendConfirm = () => {
    const [user, setUser] = useState({})
    const { filteredFriends, getFriends, addFriends } = useContext(FriendsContext)
    const { getUserById } = useContext(UsersContext)
    const { userId } = useParams()
    const currentUserId = parseInt(sessionStorage.nutshell_user)

    useEffect(() => {
        getUserById(userId)
            .then((response) => {
                setUser(response)
            })
    }, [])

    const handleClickAddFriend = (event) => {
        console.log(event.target)
    }

    // write a function that checks for:
    // if currentUser and user are already friends
    // if the user === currentUser
    // provide different responses based on that

    const friendConditional = () => {
        const friendCheck = filteredFriends.find(f => f.userId === user.id)

        if (currentUserId === user.id) {
            return (
                <>
                    <div> You can't be friends with yourself!</div>
                    <Link to="/messages"> Back to messages.</Link>
                </>
            )
        } else if (friendCheck !== undefined) {
            return (
                <>
                    <div>You are already friends with {user.name}.</div>
                    <Link to="/messages"> Back to messages.</Link>
                </>
            )
        }
        else {
            return (
                <>
                    Add {user.name} as a friend?

                    <button className="btn--save" onClick={handleClickAddFriend}>CONFIRM</button>
                    <Link to="/messages">
                        <button className="btn--save">CANCEL</button>
                    </Link>
                </>
            )
        }
    }



    return (
        friendConditional()
    )
}