import React, { FC , useState, useEffect } from 'react';
import styles from "./profileForm.module.scss";
import Input from "../../Ui-kit/Input/Input";
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

  
  
  interface InputValues {
    label: string;
    type: string;
    placeholder: string;
    key: string;
  }

  const inputsScheme: Array<InputValues>  = [
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
    <form onSubmit={handleSubmit}>
    <div className={styles.profileContent}>
      {data && (
        <>
          <div className={styles.fillArea}>
            <ul className={styles.formList}>
            {inputsScheme.map((item: InputValues) => {
              return (
                <li key={item.key} className={styles.formItem} >
                  <Input type={item.type} label={item.label} name={item.label} onChange={handleOnChange} defaultValue={inputs[item.key as keyof ProfileState]} editMode={editMode}/>
                </li>
              )
          })}
        </ul>
      </div>
      <div className={styles.submitArea}>
            <Button text='Отправить' disabled={editMode} theme={editMode ? Themes.salad : Themes.grey}/>
          </div>
      </>
      )}
      </div>
    </form>
  );
};

export default ProfileForm;