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
        <Input label='Username' placeholder={data} />
        <Input label ="E-mail"  placeholder='abobus' />
        <Input label="Street"/>
        <Input label="City" />
        <Input label="Zip code" />
        <Input label="Phone" />
        <Input label='Website' />
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