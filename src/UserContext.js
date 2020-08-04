import React, { createContext } from 'react';

const UserContext = createContext({
    user:{
        name: 'testName from UserContext',
        score: 'testScore from UserContext',
    }
});

export default UserContext;

