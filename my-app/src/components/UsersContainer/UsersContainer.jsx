import React, {  useState, useEffect } from 'react';
import styles from "./usersContainer.module.scss"
import Users from "./Users";
import { usersAPI } from '../../api/api';





const UsersContainer = ({ sortType }) => {
  console.log("Пропс sortType");
  console.log(sortType);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usersCount, setUsersCount] = useState(0);
  

  function sortByCity(a, b) {
    if (a.address.city > b.address.city) return 1;
    if (a.address.city == b.address.city) return 0;
    if (a.address.city < b.address.city) return -1;
  } 

  function sortByCompanyName(a, b) {
    if (a.company.name > b.company.name) return 1;
    if (a.company.name == b.company.name) return 0;
    if (a.company.name < b.company.name) return -1;
  } 

  

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

  useEffect(() => {
    if (data !== null) {
      if (sortType == "city") {
        console.log("aboba");
        setData(data.sort(sortByCity));
        console.log(data);
      } else if (sortType == "name") {
        console.log("adoba");
        setData(data.sort(sortByCompanyName));
        console.log(data);
      }
    }
  }, [sortType])

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
export default React.memo(UsersContainer);