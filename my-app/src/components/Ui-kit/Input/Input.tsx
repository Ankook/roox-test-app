import React from "react";
import styles from "./input.module.scss";

interface InputProps {
  placeholder?: string;
  label: string;
  initialValue?: string;
}

const Input:React.FC<InputProps>  = ({
  placeholder, label, initialValue
}) => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.fakeLabel}>{label}</div>
      <div className={styles.inputContainer}>
        <input disabled={true} type="text" name="name" placeholder={placeholder} value={initialValue}/>
      </div>
    </div>
  );
};

export default Input;