import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import UsersContainer from "./components/UsersContainer/UsersContainer";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className='app-wrapper-content'>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersContainer/>} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
