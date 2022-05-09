import React, { FC, useState, useEffect } from 'react';
import styles from "./profileForm.module.scss";
import Input from "../../Ui-kit/Input/Input";
import { Button } from '../../Ui-kit/button/Button';
import { Themes } from "../../Ui-kit/types";
import { useAppSelector } from '../../../app/hooks';
import { IUser } from '../../../features/users/types';

export interface ProfileInputsState {
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
type ProfileInputStateValues = ProfileInputsState[keyof ProfileInputsState];


export interface ProfileInputErrorsState {
  name: string;
  username: string;
  email: string,
  street: string,
  city: string,
  zipcode: string,
  phone: string,
  website: string
}


interface ProfileFormProps {
  data: IUser
}



const ProfileForm: React.FC<ProfileFormProps> = ({ data }) => {
  console.log("Пропсы компоненты ProfileForm");
  console.log(data);
  const editMode = useAppSelector(state => state.editMode.editMode);
  console.log(editMode);


  const inputValid = (inputValue: any, nameInput: keyof ProfileInputErrorsState, setInputErrors: React.Dispatch<React.SetStateAction<ProfileInputErrorsState>>) => {
    console.log(inputValue);
    console.log(!inputValue);
    {
      !inputValue ?
      setInputErrors((prev: ProfileInputErrorsState) => ({ ...prev, [nameInput]: 'true' })) :
      setInputErrors((prev: ProfileInputErrorsState) => ({ ...prev, [nameInput]: '' }))
    }
  }

  const [inputErrors, setInputErrors] = useState<ProfileInputErrorsState>({
    name: '',
    username: '',
    email: '',
    street: '',
    city: '',
    zipcode: '',
    phone: '',
    website: ''
  })




  const [inputs, setInputs] = useState<ProfileInputsState>({
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

  const HandleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    console.log(value);
    useEffect(() => {
      setInputs({
        ...inputs,
        [evt.target.name]: value
      });
    }, [])
    console.log(inputs.username);
  }

  const handleSubmit = (event: React.FormEvent) => {
    console.log("Нажали на кнопку handleSubmit");
    event.preventDefault();

    inputsScheme.forEach((item: any) => {
      (item.key != "comment") &&
        inputValid(inputs[item.key as keyof ProfileInputsState], item.key, setInputErrors)
    });
  }



  interface InputValues {
    label: string;
    type: string;
    placeholder: string;
    key: string;
  }

  const inputsScheme: Array<InputValues> = [
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
                      <Input className={inputErrors[item.key as keyof ProfileInputErrorsState] == 'true'? 'red' : 'blue'} type={item.type} label={item.label} name={item.label} onChange={HandleOnChange} defaultValue={inputs[item.key as keyof ProfileInputsState]} editMode={editMode} />
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className={styles.submitArea}>
              <Button text='Отправить' disabled={!editMode} theme={editMode ? Themes.salad : Themes.grey} />
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default ProfileForm;