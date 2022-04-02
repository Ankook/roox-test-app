import React, {  useState, useEffect } from 'react';
import styles from "./usersContainer.module.scss"
import Users from "./Users";
import { usersAPI } from '../../api/api';





const UsersContainer = ({ sortType }) => {
  console.log("Значение пропса sortType");
  console.log(sortType);
  
  const [data, setData] = useState(null);
  const [sortEvent, setSortEvent] = useState(0);
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
        console.log("Обращаемся к API");
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
    //console.log("Значение data");
    //console.log(data);
    if (data !== null) {
      //console.log("Значение пропса sortType внутир useEffect");
      //console.log(sortType);
      //console.log("Тип sortType внутри useEffect");
      //console.log(typeof sortType);
      if (sortType == "city") {
        console.log("Сортируем пользователей по городу");
        setData(data.sort(sortByCity));
        setSortEvent(sortEvent + 1);
        //console.log(sortEvent);
        //console.log(data);
      } else if (sortType == "name") {
        console.log("Сортируем пользоватеей по назаванию компании");
        setData(data.sort(sortByCompanyName));
        setSortEvent(sortEvent + 1);
        //console.log(sortEvent);
        //console.log(data);
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
export default UsersContainer;