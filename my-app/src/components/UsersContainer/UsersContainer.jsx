import React, {  useState, useEffect } from 'react';
import styles from "./usersContainer.module.scss"
import Users from "./Users";
import { usersAPI } from '../../api/api';


const MovieContainer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usersCount, setUsersCount] = useState(0);
  

  useEffect(() => {
    usersAPI.getUsers()
      .then((actualData) => {
        console.log("Данные конкретного пользователя");
        console.log(actualData);
        setData(actualData);
        setUsersCount(actualData.length);
        setError(null);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false)
      });
  }, []);

  return (
    <div className={styles.users}>
      <h1>Пользователи</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div className={styles.users}>
        <Users data={data}/>
      </div>
      <div сlassName={styles.usersCount}> Найдено {usersCount} пользователей</div>
    </div>
  );
};
export default MovieContainer;