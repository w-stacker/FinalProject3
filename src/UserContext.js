import React, { createContext } from 'react';

const UserContext = createContext({
    user:{
        name: 'testName from UserContext',
        score: 'testScore from UserContext',
    }
});

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