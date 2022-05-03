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
  const editMode = useAppSelector(state => state.editMode.editMode);
  
  const [inputs, setInputs] = useState<ProfileState>({
    name: data.name,
    username: data.username,
    email: data.email,
    street: data.address.street,
    city: data.address.city,
    zipcode: data.address.zipcode,
    phone: data.phone,
    website: data.website,
    textarea: "",
  }); 

  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setInputs({
      ...inputs,
      [evt.target.name]: value
    });
  }

  
  

  const inputsScheme = [
    {
      label: 'Name',
      type: 'text',
      placeholder: 'Иван Иванов',
      key: 'name',
    },
    {
      label: 'User name',
      type: 'text',
      placeholder: 'Ivan',
      key: 'username',
    },
    {
      label: 'E-mail',
      type: 'email',
      placeholder: 'example@mail.com',
      key: 'email',
    },
    {
      label: 'Street',
      type: 'text',
      placeholder: 'ул. Пример',
      key: 'street',
    },
    {
      label: 'City',
      type: 'text',
      placeholder: 'Москва',
      key: 'city',
    },
    {
      label: 'Zip code',
      type: 'text',
      placeholder: '1234234',
      key: 'zipcode',
    },
    {
      label: 'Phone',
      type: 'tel',
      placeholder: '89991112233',
      key: 'phone',
    },
    {
      label: 'Website',
      type: 'text',
      placeholder: 'www.example.com',
      key: 'website',
    },
    {
      label: 'Comment',
      type: 'textarea',
      placeholder: '',
      key: 'comment',
    },
  ];

  return (
  
    <div className={styles.profileForm}>
      {data && (
        <>
        <div className={styles.fillArea}>
            {inputsScheme.map(item => {
              let key = item.key;
              return (
                <Input type={item.type} label={item.label} name={item.label} onChange={handleOnChange} defaultValue={inputs[key]} editMode={editMode}/>
            )
          })}
        <Input label='Name' name="name" onChange={handleOnChange}  defaultValue={inputs.name} editMode={editMode}/>
        <Input label='Username' name="username" onChange={handleOnChange} defaultValue={inputs.username} editMode={editMode} />
        <Input label ="E-mail" name="email" onChange={handleOnChange}  defaultValue={inputs.email} editMode={editMode} />
        <Input label="Street" name="street" onChange={handleOnChange} defaultValue={inputs.street} editMode={editMode}/>
        <Input label="City"  name="city"  onChange={handleOnChange} defaultValue={inputs.city} editMode={editMode} />
        <Input label="Zip code" name="zipcode"  onChange={handleOnChange} defaultValue={inputs.zipcode} editMode={editMode} />
        <Input label="Phone" name="phone" onChange={handleOnChange} defaultValue={inputs.phone} editMode={editMode} />
        <Input label='Website' name="website" onChange={handleOnChange} defaultValue={inputs.website} editMode={editMode} />
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