import React from "react";
import styles from "./textarea.module.scss";

interface TextareProps {
  placeholder: string;
  label: string;
  editMode: boolean
}

const Textarea:React.FC<TextareProps>  = ({
  placeholder, label, editMode
}) => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.fakeLabel}>{label}</div>
      <div className={styles.textareaContainer}>
        <textarea disabled={!editMode} rows={3}>{placeholder}</textarea>
      </div>
    </div>
  );
};

export default Textarea;