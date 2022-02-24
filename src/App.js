import React from 'react';
import './App.css';
import UserProfile from './UserProfile.js';
import {useState} from 'react';

function App() {
  let [data, setData] = useState({});

  return (
    <div className="App">
      <UserProfile callback={setData} />
      <p>Name: {"name" in data ? data["name"] : "No name To Display" }</p>
      <p>Email: {"email" in data ? data["email"] : "No email To Display" }</p>
    </div>
  );
}

export default App;