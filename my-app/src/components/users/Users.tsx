import React, { FC } from 'react';
import styles from "./users.module.scss"

interface TitleProps {
  title?: string;
}

const Users: FC<TitleProps> = ({ title}) => {
  return (
    <div className={styles.users}>
      
    </div>
  );
};

export default Users;