import React from 'react'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";



const UserInfo = () => {
        const { user } = useAuth0();
        console.log("User info: "+ Object.keys(user))

        // axios.post('http://localhost:3001/api/user', {
        //     userName: "placeholdername",
           
        //   })
        
        return (
            <div>
                <h1><b>{JSON.stringify(user.name)}</b></h1>
                <b>{JSON.stringify(user.family_name)}</b>
            </div>
        )
    
}

export default withAuthenticationRequired(UserInfo)