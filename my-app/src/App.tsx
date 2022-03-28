import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import User from "./components/Users/User/User";
function App() {
  return (
    <div className="App">
      {/*<Sidebar />
      <Users />*/}
      <User/>
    </div>
  );
}

export default App;
