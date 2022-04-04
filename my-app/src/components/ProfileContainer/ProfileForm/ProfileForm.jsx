import React, { FC } from 'react';
import styles from "./profileForm.module.scss";
import Input from "../../Ui-kit/Input/Input";
import Textarea from "../../Ui-kit/Textarea/Textarea";
import { Button } from '../../Ui-kit/button/Button';
import { Themes } from "../../Ui-kit/types";




const ProfileForm = ({ data, editMode }) => {
  console.log("Пропсы компоненты ProfileForm");
  console.log(data);
  console.log(editMode);

  const text

  return (
    
    <div className={styles.profileForm}>
      {data && (
        <>
      <div className={styles.fillArea}>
        <Input label='Name' name="name" value={data.name} onChange={updat} editMode={editMode}  />
        <Input label='Username' name="username" value={data.username} editMode={editMode} />
        <Input label ="E-mail" name="email"  value={data.email} editMode={editMode} />
        <Input label="Street" name="street" value={data.address.street} editMode={editMode}/>
        <Input label="City"  name="city"value={data.address.city} editMode={editMode} />
        <Input label="Zip code" name="zipcode" value={data.address.zipcode} editMode={editMode} />
        <Input label="Phone" name="phone" value={data.phone} editMode={editMode} />
        <Input label='Website' name="website" value={data.website} editMode={editMode} />
            <Textarea label='Comment' value={editMode}/>
      </div>
      <div className={styles.submitArea}>
            <Button text='Отправить' disabled={!editMode} theme={editMode ? Themes.salad : Themes.grey}/>
          </div>
      </>
      )}
    </div>
  );
};

export default ProfileForm;