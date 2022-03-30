import React from "react";
import styles from "./textarea.module.scss";

interface TextareProps {
  placeholder: string;
  label: string;
}

const Textarea:React.FC<TextareProps>  = ({
  placeholder, label
}) => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.fakeLabel}>{label}</div>
      <div className={styles.textareaContainer}>
        <textarea rows={3}>{placeholder}</textarea>
      </div>
    </div>
  );
};

export default Textarea;