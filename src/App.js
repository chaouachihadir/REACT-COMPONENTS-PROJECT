// App.js
import React from 'react';
import ProfilePhoto from './componet/Profile/ProfilePhoto';
import FullName from './componet/Profile/FullName';
import Address from './componet/Profile/Address';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Profile</h1>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}


export default App;


