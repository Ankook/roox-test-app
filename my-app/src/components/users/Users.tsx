import React, { FC, useState, useEffect } from 'react';
import styles from "./users.module.scss"
import User from "./User/User"

interface TitleProps {
  title?: string;
}




const Users: FC<TitleProps> = ({ title }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((actualData) => console.log(actualData));
  }, []);
  

  return (
    <div className={styles.users}>
      <h1>Cписок пользователей</h1>
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <div className={styles.usersCount}>Найдено 10 пользователей</div>
    </div>
  );
};

export default Users;