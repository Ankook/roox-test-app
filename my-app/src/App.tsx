import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import Users from "./components/Users/Users";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className='app-wrapper-content'>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
