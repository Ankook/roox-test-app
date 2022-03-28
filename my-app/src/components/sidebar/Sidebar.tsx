import React, { FC } from 'react';
import { types } from 'sass';
import { Button } from '../Ui-kit/button/Button';
import styles from "./sidebar.module.scss"
import { Themes} from "../Ui-kit/types";

interface TitleProps {
  title?: string;
}

const Sidebar: FC<TitleProps> = ({ title}) => {
  return (
    <div className={styles.sidebar}>
      <span>Cортировка</span>
      <Button text="по городу" theme={Themes.eggPlant} />
      <Button text="по компании" theme={Themes.eggPlant} />
    </div>
  );
};

export default Sidebar;