import React, { FC, useState } from 'react';
import { Button } from '../Ui-kit/button/Button';
import styles from "./profile.module.scss"
import { Themes } from "../Ui-kit/types";
import ProfileForm from "./ProfileForm/ProfileForm";
import { useAppDispatch } from '../../app/hooks';




const Profile = ({ data }) => {

  const dispatch = useAppDispatch();
  
  function handleClick(event) {
    dispatch()
    console.log("Установили режим редактирования");
  }

  console.log("Пропсы комопненты Profile");
  console.log(data);
  return (
    <div className={styles.profile}>
      <div className={styles.profilePanel}>
        <h1 className={styles.title}>Профиль пользователя</h1>
        <Button onClick={handleClick} text='Редактировать' theme={Themes.eggPlant} />
      </div>
      <ProfileForm editMode={editMode} data={data}/>
    </div>
  );
};

export default Profile;