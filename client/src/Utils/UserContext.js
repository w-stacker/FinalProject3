import React, { createContext } from 'react';
import { useAuth0 }  from "@auth0/auth0-react";
import axios from 'axios';


// const { Provider, Consumer } = React.createContext({user: {}});

const UserContext = createContext({
    user:{
        name: 'testName from UserContext',
        score: 'testScore from UserContext',
    }
});

// const GetUserData = () => {
//     const [loggedInUser, setLoggedInUser] = useState({})
//     const [userName, setUserName] = useState('')
//     const { user } = useAuth0();
//     const UserId = [];
  
    //   useEffect(() => {
    //   console.log("test", user)
    //   axios.get('http://localhost:3001/api/user', user)
    // }, [user] )
// }


export default UserContext;




// export default class UserContext extends React.Component {
//     // state = {
//     //     loggedInUser: []
//     // }
// }





// import { createContext } from 'react'

// export const UserContext = createContext({
//     user: ""
// });

// //capture id place it here 

// export default UserContext;