import React, {  useState, useEffect } from 'react';
import styles from "./usersContainer.module.scss"
import User from "./User/User"


const MovieContainer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usersCount, setUsersCount] = useState(0);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
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
        {data &&
          data.map(user => (
            <User key={user.id} name={user.name} username={user.username} city={user.address.city} company={user.company.name}/>
          ))}
      </div>
      <div сlassName={styles.usersCount}> Найдено {usersCount} пользователей</div>
    </div>
  );
};
export default MovieContainer;