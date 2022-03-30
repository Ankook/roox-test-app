import React, { FC } from 'react';
import { types } from 'sass';
import styles from "./user.module.scss"

interface UserProps {
  name: string,
  username: string,
  company: string,
  city: string
}

const User: FC<UserProps> = ({ name,username, city, company }) => {
  return (
    <div className={styles.user}>
      <div className={styles.userContent}>
        <div className={styles.userData}>
          <div className={styles.name}>
            <span className={styles.title}>ФИО:</span>
            <span className={styles.value}>{name} {username}</span>
          </div>
          <div className={styles.city}>
            <span className={styles.title}>город:</span>
            <span className={styles.value}>{city}</span>
          </div>
          <div className={styles.company}>
            <span className={styles.title}>компания:</span>
            <span className={styles.value}>{company}</span>
          </div>
        </div> 
        <span className={styles.more}>
          Подробнее
        </span>
      </div>
    </div>
  );
};

export default User;