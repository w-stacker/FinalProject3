import React from 'react';
import './App.css';

import 'antd/dist/antd.css';

import Dashboard from './Container/Dashboard/Dashboard';
import Store from "./Container/Dashboard/Store"

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
