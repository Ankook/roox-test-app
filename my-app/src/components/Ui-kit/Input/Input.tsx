import React, { FocusEventHandler } from "react";
import styles from "./input.module.scss";
import cx from "classnames";

interface Props {
  placeholder?: string;
  
}

const Input:React.FC<Props>  = ({
  placeholder
}) => {
  return (
    <div className={styles.input}>
      <input  placeholder={placeholder}/>
    </div>
  );
};

export { Input };