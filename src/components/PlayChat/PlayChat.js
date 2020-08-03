import React from 'react';
// import './App.css';

import 'antd/dist/antd.css';

import Dashboard from './src/Container/Dashboard/Dashboard';
import Store from "./src/Container/Dashboard/Store"

//formally app.js
function PlayChat() {
  return (
    <div className="App">
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default PlayChat;
