import React, {  useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Profile from './Profile';
import { usersAPI } from '../../api/api';



const ProfileContainer = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    usersAPI.getUser(id)
      .then((actualData) => {
        console.log("Данные конкретного пользователя");
        console.log(actualData);
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false)
      });
  }, [id]);

  
  return (
    <Profile data={data}/>
  );
};
export default ProfileContainer;