import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Users />
    </div>
  );
}

export default App;
