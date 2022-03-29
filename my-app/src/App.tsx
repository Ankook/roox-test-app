import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Users from "./components/Users/Users";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;
