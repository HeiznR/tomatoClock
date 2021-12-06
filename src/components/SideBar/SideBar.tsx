import classNames from "classnames";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleSideBar } from "../../redux/Reducers/SideBar";
import styles from "./SideBar.module.scss";

interface IProps {
  sideBarOpen: boolean;
}

const SideBar: FC<IProps> = ({ sideBarOpen }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={classNames(styles.sideBar, {
        [styles.active]: sideBarOpen === true,
      })}
    >
      <button onClick={() => dispatch(handleSideBar())}>Close</button>
      <nav className={styles.sideBar__navigation}>
        <Link to="/">Main</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </div>
  );
};

export default SideBar;
