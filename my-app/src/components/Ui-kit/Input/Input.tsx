import React from "react";
import styles from "./input.module.scss";

interface InputProps {
  placeholder: string;
  label: string;
}

const Input:React.FC<InputProps>  = ({
  placeholder, label
}) => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.fakeLabel}>{label}</div>
      <div className={styles.inputContainer}>
        <input type="text" name="name" placeholder={placeholder}/>
      </div>
    </div>
  );
};

export default Input;