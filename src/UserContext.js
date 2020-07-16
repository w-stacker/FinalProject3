import React, { createContext, Component } from 'react'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const UserContext = createContext();

class UserContextProvider extends Component {
    Profile = () => {
        const { user } = useAuth0();
        const { name, picture, email } = user
    }

    render(user) {
        return (
            <div>{JSON.stringify(user.name)}</div>
        )
    }
}

export default UserContextProvider;