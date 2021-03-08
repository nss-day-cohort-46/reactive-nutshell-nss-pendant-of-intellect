/** INFO
 *  AUTHOR: Dan Ross
 *  PURPOSE: This module provides takes data fromt the user provider,
 * in order to search through all users
 **/

 import React, { useContext, useEffect, useState } from "react"
 import { UsersContext } from "./UsersProvider"
 // import "./User.css"
 
 export const UserList = () => {
     const { users, getUsers } = useContext(UsersContext)
 
     useEffect(() => {
        getUsers()
     }, [])
 
     return (
         <>
             <h1>Users: </h1>
             {console.log(sessionStorage.nutshell_user)}
             {users.map(user => <div key={user.id}>{user.name}</div>)}
         </>
     )
 }
 