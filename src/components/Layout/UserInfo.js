import React, { useState, useEffect } from 'react'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import axios from 'axios';



const UserInfo = () => {
    const [userID, setUserID] = useState()

    const { user } = useAuth0();
    console.log("User info: "+ Object.keys(user))
        useEffect(()=> {
            axios.post('http://localhost:3001/api/user', user)
                .then( res => {
                    setUserID(res.data._id)
                    console.log(res.data._id)
                }
            )
        }, []
    )
//     axios.post('http://localhost:3001/api/user', user)
//         .then( res => {
//             // setUserID(res.data._id)
//             console.log(res.data._id)
//         } [userID]
// )
    return (
        <div>
            <h1><b>{JSON.stringify(user.name)}</b></h1>
            <b>{JSON.stringify(user.family_name)}</b>
        </div>
    )
    
}

export default withAuthenticationRequired(UserInfo)
