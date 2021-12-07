import classNames from "classnames";
import { useDispatch } from "react-redux";
import SideBar from "../components/SideBar/SideBar";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { handleSideBar } from "../redux/Reducers/SideBar";
import styles from "./MainLayout.module.scss";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainLayout = ({ children }: any) => {
    const isActive = useTypedSelector((state) => state.sideBar.isActive);
    const dispatch = useDispatch();
    return (
        <>
            <SideBar sideBarOpen={isActive} />
            <button
                className={classNames(styles.button, {
                    [styles.active]: isActive === true,
                })}
                onClick={() => dispatch(handleSideBar())}
            >
                {isActive ? (
                    <FontAwesomeIcon icon={faTimes}  />
                ) : (
                    <FontAwesomeIcon icon={faBars}  />
                )}
            </button>
            <div className={styles.wrapper}>{children}</div>
        </>
    );
};

export default MainLayout;
