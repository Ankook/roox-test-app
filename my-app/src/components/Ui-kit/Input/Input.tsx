import React from "react";
import styles from "./input.module.scss";
import cx from "classnames";

interface InputProps {
  onChange: (e: any) => void;
  type: string;
  label: string;
  value: string;
  editMode: boolean;
  name: string;
  className: any;
}
const Input: React.FC<InputProps> = ({
  label,
  value,
  editMode,
  name,
  type,
  className,
  onChange,
}) => {
  console.log(className);
  if (type == "textarea") {
    return (
      <div className={styles.textAreaComponentContainer}>
        <div className={styles.fakeLabel}>{label}</div>
        <div className={styles.textareaContainer}>
          <textarea
            className={styles.textarea}
            onChange={onChange}
            disabled={!editMode}
            rows={3}
          ></textarea>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.inputComponentContainer}>
      <div className={styles.fakeLabel}>{label}</div>
      <div
        className={cx(
          styles.inputContainer,
          className == "red" ? styles.red : styles.blue
        )}
      >
        <input
          className={styles.input}
          onChange={onChange}
          disabled={!editMode}
          type="text"
          name={name}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
