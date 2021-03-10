/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module confirms that a user wants to add another user as a friend
 **/

import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams, Link } from 'react-router-dom';
import { FriendsContext } from "./FriendsProvider"
import { UsersContext } from "../users/UsersProvider"
import "./Friends.css"


export const FriendConfirm = () => {
    const [user, setUser] = useState({})
    const { filteredFriends, getFriends, addFriends } = useContext(FriendsContext)
    const { getUserById } = useContext(UsersContext)
    const { userId } = useParams()
    const history = useHistory()
    const currentUserId = parseInt(sessionStorage.nutshell_user)

    useEffect(() => {
        getUserById(userId)
            .then((response) => {
                setUser(response)
            })
    }, [])

    useEffect(() => {
        getFriends()
    }, [])

    const handleClickAddFriend = (event) => {
        const newFriend = {
            currentUserId: currentUserId,
            userId: user.id
        }
        addFriends(newFriend)
            .then(() => {
                window.alert("Added!")
                history.push("/messages")
            })
    }

    // write a function that checks for:
    // if currentUser and user are already friends
    // if the user === currentUser
    // provide different responses based on that

    const friendConditional = () => {
        const friendCheck = filteredFriends.find(f => f.userId === user.id)

        if (currentUserId === user.id) {
            return (
                <section className="friendConfirm">
                    <h3 className="friendConfirm__message"> You can't be friends with yourself!</h3>
                    <div className="friendConfirm__buttons">
                        <Link to="/messages">
                            <button className="btn--edit">Back to messages.</button>
                        </Link>
                    </div>
                </section>
            )
        } else if (friendCheck !== undefined) {
            return (
                <section className="friendConfirm">
                    <h3 className="friendConfirm__message">You are already friends with {user.name}.</h3>
                    <div className="friendConfirm__buttons">
                        <Link to="/messages">
                            <button className="btn--edit">Back to messages.</button>
                        </Link>
                    </div>
                </section>
            )
        }
        else {
            return (
                <section className="friendConfirm">
                    <h3 className="friendConfirm__message">Add {user.name} as a friend?</h3>
                    <div className="friendConfirm__buttons">
                        <button className="btn--create" onClick={handleClickAddFriend}>CONFIRM</button>
                        <Link to="/messages">
                            <button className="btn--delete">CANCEL</button>
                        </Link>
                    </div>
                </section>
            )
        }
    }



    return (
        friendConditional()
    )
}