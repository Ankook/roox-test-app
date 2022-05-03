import React from "react";
import styles from "./textarea.module.scss";

interface TextareProps {
  label: string;
  editMode: boolean
  value: string
}

const Textarea:React.FC<TextareProps>  = ({
  label, editMode, value
}) => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.fakeLabel}>{label}</div>
      <div className={styles.textareaContainer}>
        <textarea disabled={!editMode} rows={3}>{value}</textarea>
      </div>
    </div>
  );
};

export default Textarea;