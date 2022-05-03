import React from "react";
import styles from "./input.module.scss";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string;
  defaultValue: string;
  editMode: boolean;
  name: string;
}
const Input :React.FC<InputProps>  = ({
  label, defaultValue, editMode, name
}) => {
  
  return (
    <div className={styles.componentContainer}>
      <div className={styles.fakeLabel}>{label}</div>
      <div className={styles.inputContainer}>
        <input
          disabled={!editMode}
          type="text"
          name={name} defaultValue={defaultValue} />
      </div>
    </div>
  );
};

export default Input;