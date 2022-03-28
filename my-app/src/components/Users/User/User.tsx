import React, { FC } from 'react';
import { types } from 'sass';
import styles from "./user.module.scss"

interface UserProps {
  
}

const User: FC<UserProps> = ({ }) => {
  return (
    <div className={styles.user}>
      <div className={styles.userContent}>
        <div className={styles.userData}>
          <div className={styles.name}>
            <span className={styles.title}>ФИО:</span>
            <span className={styles.value}>Иван Иванов</span>
          </div>
          <div className={styles.city}>
            <span className={styles.title}>город:</span>
            <span className={styles.value}>Москва</span>
          </div>
          <div className={styles.company}>
            <span className={styles.title}>компания:</span>
            <span className={styles.value}>ООО "Пример"</span>
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