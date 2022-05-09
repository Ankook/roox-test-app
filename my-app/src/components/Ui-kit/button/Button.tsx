import React from "react";
import cx from "classnames";
import styles from "./button.module.scss";
import { Themes } from "../types";

interface Props {
  theme: Themes;
  text: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: any;
  name?: string;
  disabled?: boolean;
  editMode?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  onClick,
  theme,
  className,
  name,
  disabled,
}: Props) => {
  const getTheme = () => {
    if (theme === Themes.eggPlant) {
      return styles.eggPlantTheme;
    }
    if (theme === Themes.salad) {
      return styles.saladTheme;
    }
    if (theme === Themes.grey) {
      return styles.greyTheme;
    }
    return;
  };

  return (
    <button
      className={cx(styles.customButton, getTheme(), className)}
      name={name}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { Button };
