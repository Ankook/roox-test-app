import React, { FocusEventHandler } from "react";
import styles from "./input.module.scss";
import cx from "classnames";

{/*interface Props {
  placeholder?: string;
  name?: string;
  id?: string;
  value?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  width?: string;
  inputType?: string;
}
*/}
const Input  = ({
  placeholder
}) => {
  return (
    <div>
      <input className={styles.input} placeholder={placeholder}/>
    </div>
  );
};

export { Input };