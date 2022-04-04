import React from "react";
import styles from "./input.module.scss";

interface InputProps {
  label: string;
  value?: string;
  editMode: boolean;
  name: string
}

const Input:React.FC<InputProps>  = ({
  label, value, editMode, name
}) => {
  
  return (
    <div className={styles.componentContainer}>
      <div className={styles.fakeLabel}>{label}</div>
      <div className={styles.inputContainer}>
        <input
          disabled={!editMode}
          type="text"
          name={name} value={value} />
      </div>
    </div>
  );
};

export default Input;