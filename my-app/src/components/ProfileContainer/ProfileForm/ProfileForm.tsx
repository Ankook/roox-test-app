import React, { FC , useState, useEffect } from 'react';
import styles from "./profileForm.module.scss";
import Input from "../../Ui-kit/Input/Input";
import Textarea from "../../Ui-kit/Textarea/Textarea";
import { Button } from '../../Ui-kit/button/Button';
import { Themes } from "../../Ui-kit/types";
import { useAppSelector } from '../../../app/hooks';
import { IUser } from '../../../features/users/types';

export interface ProfileState {
  name: string;
  username: string;
  email: string,
  street: string,
  city: string,
  zipcode: string,
  phone: string,
  website: string,
  textarea: string
}

interface ProfileFormProps  {
  data: IUser
}



const ProfileForm:React.FC<ProfileFormProps> = ({ data }) => {
  console.log("Пропсы компоненты ProfileForm");
  console.log(data);
  
  const [inputs, setInputs] = useState<ProfileState>({
    name: data?.name,
    username: data?.username,
    email: data?.email,
    street: data?.address.street,
    city: data?.address.city,
    zipcode: data?.address.zipcode,
    phone: data?.phone,
    website: data?.website,
    textarea: "",
  }); 


  useEffect(() => {
    Object.keys(inputs).map(key => {
      setInputs(prevState => ({
        ...prevState,
        name: "2"
      }))
    });
  }, [data])
  


  const editMode = useAppSelector(state => state.editMode.editMode);
  

  return (
  
    <div className={styles.profileForm}>
      {data && (
        <>
      <div className={styles.fillArea}>
        <Input label='Name' name="name"  value={inputs.name} editMode={editMode}/>
        <Input label='Username' name="username" value={inputs.username} editMode={editMode} />
        <Input label ="E-mail" name="email"  value={inputs.email} editMode={editMode} />
        <Input label="Street" name="street" value={inputs.street} editMode={editMode}/>
        <Input label="City"  name="city"value={inputs.city} editMode={editMode} />
        <Input label="Zip code" name="zipcode" value={inputs.zipcode} editMode={editMode} />
        <Input label="Phone" name="phone" value={inputs.phone} editMode={editMode} />
        <Input label='Website' name="website" value={inputs.website} editMode={editMode} />
            <Textarea value={inputs.textarea} label='Comment' editMode={editMode}/>
      </div>
      <div className={styles.submitArea}>
            <Button text='Отправить' disabled={editMode} theme={editMode ? Themes.salad : Themes.grey}/>
          </div>
      </>
      )}
    </div>
  );
};

export default ProfileForm;