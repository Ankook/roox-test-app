import React from "react";
import styles from "./input.module.scss";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  label: string;
  defaultValue: string;
  editMode: boolean;
  name: string;
}
const Input :React.FC<InputProps>  = ({
  label, defaultValue, editMode, name, type
}) => {
  
  return (
    <div className={styles.componentContainer}>
      <div className={styles.fakeLabel}>{label}</div>
      <div className={styles.inputContainer}>
        <input className={styles.input}
          disabled={!editMode}
          type="text"
          name={name} defaultValue={defaultValue} />
      </div>
    </div>
  );
};

export default Input;