import React, { FC } from 'react';
import styles from "./profileForm.module.scss";
import Input from "../../Ui-kit/Input/Input";
import Textarea from "../../Ui-kit/Textarea/Textarea";
import { Button } from '../../Ui-kit/button/Button';
import { Themes } from "../../Ui-kit/types";




const ProfileForm = ({ data }) => {
  console.log("Пропсы компоненты ProfileForm");
  console.log(data);
  return (
    
    <div className={styles.profileForm}>
      {data && (
        <>
      <div className={styles.fillArea}>
        <Input label='Name' placeholder={data.name} />
        <Input label='Username' placeholder={data.username} />
        <Input label ="E-mail"  placeholder={data.email} />
        <Input label="Street" placeholder={data.address.street}/>
        <Input label="City" placeholder={data.address.city} />
        <Input label="Zip code" placeholder={data.address.zipcode} />
        <Input label="Phone" placeholder={data.phone} />
        <Input label='Website' placeholder={data.website} />
        <Textarea label='Comment'/>
      </div>
      <div className={styles.submitArea}>
        <Button text='Отправить' theme={Themes.grey} />
          </div>
      </>
      )}
    </div>
  );
};

export default ProfileForm;