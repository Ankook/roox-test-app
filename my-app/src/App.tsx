import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import UsersContainer from "./components/UsersContainer/UsersContainer";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";


function App() {

  const [sortType, setSortType] = useState(null);

  function handleSortChange(newValue: any) {
    setSortType(newValue);
    console.log(newValue);
  }

  return (
    <div className="app">
      <Sidebar changeSortType={handleSortChange} />
      <div className='app-wrapper-content'>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<UsersContainer sortType={sortType} />} />
            <Route path="/users" element={<UsersContainer sortType={sortType} />} />
            <Route path="/users/:id" element={<ProfileContainer />} />
        </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
