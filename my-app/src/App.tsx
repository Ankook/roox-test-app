import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Users from "./components/Users/Users";
import Profile from "./components/Profile/Profile";
import { Input } from './components/Ui-kit/Input/Input';

function App() {
  return (
    <div className="App">
      <Input placeholder="Иван Иванов" />
    </div>
  );
}

export default App;
