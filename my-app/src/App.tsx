import React, { useEffect, useState } from 'react';
import { getUsers } from "../src/features/users/usersSlice";
import { useAppDispatch } from './app/hooks';
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

  const dispatch = useAppDispatch(); //Этот хук возвращает ссылку на dispatch-функцию из хранилища Redux

  dispatch(getUsers());


  

  return (
    <div className="app">
      <Sidebar/>
      <div className='app-wrapper-content'>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<UsersContainer/>} />
            <Route path="/users" element={<UsersContainer/>} />
            <Route path="/users/:id" element={<ProfileContainer />} />
        </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
