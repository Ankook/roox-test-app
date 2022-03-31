import React, { FC } from 'react';
import { Button } from '../Ui-kit/button/Button';
import styles from "./profile.module.scss"
import { Themes } from "../Ui-kit/types";
import ProfileForm from "./ProfileForm/ProfileForm";
interface ProfileProps {
  
}

const Profile: FC<ProfileProps> = ({ }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profilePanel}>
        <h1 className={styles.title}>Профиль пользователя</h1>
        <Button text='Редактировать' theme={Themes.eggPlant} />
      </div>
      <ProfileForm/>
    </div>
  );
};

export default Profile;