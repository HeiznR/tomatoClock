import classNames from "classnames";
import { useDispatch } from "react-redux";
import SideBar from "../components/SideBar/SideBar";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { handleSideBar } from "../redux/Reducers/SideBar";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }: any) => {
  const isActive = useTypedSelector((state) => state.sideBar.isActive);
  const dispatch = useDispatch();
  return (
    <div>
      <SideBar sideBarOpen={isActive} />
      <button className={styles.button} onClick={() => dispatch(handleSideBar())}>Open</button>
      <div className={classNames(styles.wrapper, {
        [styles.active]: isActive === true,
      })}>{children}</div>
    </div>
  );
};

export default MainLayout;
