import React, { FC } from 'react';
import { types } from 'sass';
import styles from "./user.module.scss";
import { NavLink } from "react-router-dom";

interface UserProps {
  name: string,
  
  company: string,
  city: string,
  id: number
}

const User: FC<UserProps> = ({ name,  city, company, id }) => {
  return (
    <div className={styles.user}>
      <div className={styles.userContent}>
        <div className={styles.userData}>
          <div className={styles.name}>
            <span className={styles.title}>ФИО:</span>
            <span className={styles.value}>{name}span>
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
        <NavLink className={styles.navLink} to={"/users/" + id}>Подробнее</NavLink>
        </span>
      </div>
    </div>
  );
};

export default User;