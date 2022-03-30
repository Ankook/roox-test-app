import React, { FC, useState, useEffect } from 'react';
import styles from "./users.module.scss"
import User from "./User/User"

interface TitleProps {
  title?: string;
}


const  fetchUsers = () =>  { 
  return  fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((actualData) => (actualData));
};


const MovieContainer:React.FC = () => {
  console.log(fetchUsers());
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    const users = fetchUsers();
    console.log('MovieContainer: useEffect: users: ', users);
    setUsers(users);
  }, []);
  return(
    <div className="movie-container">
      <h2>Users</h2>
      <ul className ="user-list">
        {users.map(user => (
          <User key={user.id} />
        ))}
      </ul>      
    </div>
  );
};
export default MovieContainer;