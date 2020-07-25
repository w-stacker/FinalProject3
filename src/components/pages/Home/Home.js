import React, {  useContext } from 'react'
import { UserContext } from '../../../UserContext'


export function Home () {
    const msg  = useContext(UserContext);

    return <h2>{msg}</h2>
}

export default Home;