import React, {  useState, useEffect } from 'react';
import styles from "./usersContainer.module.scss"
import Users from "./Users";
import { usersAPI } from '../../api/api';

interface UserContainerType  {
  sortType: string | null,
}

const UsersContainer: React.FC<UserContainerType> = (sortType) => {
  console.log("Пропс sortType");
  console.log(sortType);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usersCount, setUsersCount] = useState(0);
  

  useEffect(() => {
    usersAPI.getUsers()
      .then((actualData: any) => {
        console.log("Данные конкретного пользователя");
        console.log(actualData);
        setData(actualData);
        setUsersCount(actualData.length);
        setError(null);
      })
      .catch((err: any) => {
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
      <div className={styles.usersCount}> Найдено {usersCount} пользователей</div>
    </div>
  );
};
export default UsersContainer;