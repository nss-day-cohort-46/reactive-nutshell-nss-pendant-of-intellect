/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module passes search terms to the common
 * ancestor of the UserProvider so that UserList can update 
 * dynamically
 **/
import React, { useContext } from "react"
import { UsersContext } from "./UsersProvider"

export const UserSearch = () => {
    const { setSearchTerms } = useContext(UsersContext)

    return(
        <>
            <input type="text"
                className="input--wide"
                onKeyUp={(event) => setSearchTerms(event.target.value)}
                placeholder="Search for a friend... " />
        </>
    )
}