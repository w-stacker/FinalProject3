import React, {  useContext } from 'react';
import TetrisScoreboard from './Components/TetrisScoreboard'
// import { UserContext } from '../../../UserContext'


export function Home () {
    // useContext(UserContext);

    return (
    <b>
        High scores!
        <TetrisScoreboard/> 
    </b>
    )
}

export default Home;
