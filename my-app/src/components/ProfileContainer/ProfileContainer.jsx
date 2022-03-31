import React, {  useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Profile from './Profile';



const ProfileContainer = () => {
  debugger;
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usersCount, setUsersCount] = useState(0);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
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
        console.log("Данные конкретного пользователя 2");
        console.log(data);
      });
  }, []);

  
  return (
    <Profile data={data}/>
  );
};
export default ProfileContainer;