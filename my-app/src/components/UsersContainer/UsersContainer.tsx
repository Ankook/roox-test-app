import React, {  useState, useEffect } from 'react';
import styles from "./usersContainer.module.scss"
import Users from "./Users";
import { usersAPI } from '../../api/api';
import { useAppSelector } from '../../app/hooks';




type UsersContainerType = {
  sortType: string
}

const UsersContainer: React.FC<UsersContainerType> = ({ }) => {
  
  const users = useAppSelector(state => state.users.users);
  console.log(users);

  
  const [data, setData] = useState(null);
  const [sortEvent, setSortEvent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usersCount, setUsersCount] = useState(0);
  

  function sortByCity(a: any, b: any) {
    if (a.address.city > b.address.city) return 1;
    if (a.address.city === b.address.city) return 0;
    if (a.address.city < b.address.city) return -1;
  } 

  function sortByCompanyName(a: any, b: any) {
    if (a.company.name > b.company.name) return 1;
    if (a.company.name === b.company.name) return 0;
    if (a.company.name < b.company.name) return -1;
  } 

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