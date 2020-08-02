import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom' 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth0ProviderWithHistory from '../src/components/pages/Login/Auth0-Provider-with-history';
// import UserContext from './Utils/UserContext';



// const [user, setUser] = useState({})

// useEffect(() => {
//   // console.log("test", user).then(
//     axios.get('http://localhost:3001/api/user', user)
//     .then(res => {
//         setUser(res.data)
//       }
//     )}, [user] )

// handleUser(data){
//   setUser(data)
//}
            
ReactDOM.render(
  <Router> 
    <Auth0ProviderWithHistory>
      
        <React.StrictMode>
          <App />
        </React.StrictMode>
      
    </Auth0ProviderWithHistory>
  </Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
