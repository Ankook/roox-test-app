import React, { FC } from 'react';
import { Button } from '../Ui-kit/button/Button';
import styles from "./profile.module.scss"
import { Themes } from "../Ui-kit/types";
interface ProfileProps {
  
}

const Profile: FC<ProfileProps> = ({ }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profilePanel}>
        <h1>Профиль пользователя</h1>
        <Button text='Редактировать' theme={Themes.eggPlant} />
      </div>
      <ProfileForm/>
    </div>
  );
};

export default Profile;