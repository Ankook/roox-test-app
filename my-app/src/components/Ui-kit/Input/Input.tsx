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
  if (type == "textarea") {
    return (
      <div className={styles.textAreaComponentContainer}>
        <div className={styles.fakeLabel}>{label}</div>
        <div className={styles.textareaContainer}>
          <textarea className={styles.textarea} disabled={!editMode} rows={3}></textarea>
        </div>
      </div>
    )
  }
    return (
      <div className={styles.inputComponentContainer}>
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