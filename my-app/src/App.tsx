import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import getUsers from "../src/features/users/usersSlice";
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

  const dispatch = useDispatch(); //Этот хук возвращает ссылку на dispatch-функцию из хранилища Redux

  useEffect(() => { //dispatch должен быть cтабильным, но приходится добавлять в массив зависимостей.
    dispatch(getUsers());
  }, [dispatch]);


  const [sortType, setSortType] = useState("default");

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
