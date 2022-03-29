import React, { FC } from 'react';
import styles from "./users.module.scss"
import User from "./User/User"

interface TitleProps {
  title?: string;
}

const Users: FC<TitleProps> = ({ title}) => {
  return (
    <div className={styles.users}>
      <h1>Cписок пользователей</h1>
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <div className={styles.usersCount}>Найдено 10 пользователей</div>
    </div>
  );
};

export default Users;