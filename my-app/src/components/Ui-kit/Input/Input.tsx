import React from "react";
import styles from "./input.module.scss";
import cx from "classnames";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  label: string;
  defaultValue: string;
  editMode: boolean;
  name: string;
  className: any
}
const Input :React.FC<InputProps>  = ({
  label, defaultValue, editMode, name, type, className
}) => {
  console.log(className);
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
        <div className={cx(styles.inputContainer, className == "red" ? styles.red: styles.blue)}>
          <input className={styles.input}
            disabled={!editMode}
            type="text"
            name={name} defaultValue={defaultValue} />
        </div>
      </div>
    );
  
};

export default Input;