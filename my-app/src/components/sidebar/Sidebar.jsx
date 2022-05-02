import React, { FC } from 'react';
import { Button } from '../Ui-kit/button/Button';
import styles from "./sidebar.module.scss"
import { Themes } from "../Ui-kit/types";
import { setSort } from '../../features/sortConfig/sortSlice';
import { Dispatch } from '@reduxjs/toolkit';



const Sidebar = (props) => {

  function handleClick(event) {
    if (event.target.innerHTML === "по городу") {
      //props.changeSortType("city")
      dispatch(setSort("city"))
    } else if (event.target.innerHTML === "по компании") {
      //props.changeSortType("name")
      dispatch(setSort("company"));
    }
  }


  return (
    <div className={styles.sidebar}>
      <span className={styles.sortTitle}>Cортировка</span>
      <Button onClick={handleClick} text="по городу" theme={Themes.eggPlant} />
      <Button onClick={handleClick} text="по компании" theme={Themes.eggPlant} />
    </div>
  );
};

export default Sidebar;