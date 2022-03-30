import React, { FC } from 'react';
import styles from "./profileForm.module.scss";
import  Input  from "../../Ui-kit/Input/Input";
interface ProfileProps {
  
}

const ProfileForm: FC<ProfileProps> = ({ }) => {
  return (
    <div className={styles.profileForm}>
      <Input label='Name' placeholder='Иван Иванов' />
      <Input label='User name' placeholder='Ivan' />
      <Input label ="E-mail" placeholder='example@mail.com' />
      <Input label ="Street" placeholder='ул. Пример' />
      <Input label="City" placeholder="Москва" />
      <Input label="Zip code" placeholder='1234234' />
      <Input label="Phone" placeholder='89991112233' />
      <Input label='Website' placeholder='www.example.com' />
    </div>
  );
};

export default ProfileForm;