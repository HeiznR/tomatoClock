import { faCog, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.scss";
interface IProps {
    sideBarOpen: boolean;
}

const SideBar: FC<IProps> = ({ sideBarOpen }) => {
    return (
        <div
            className={classNames(styles.sideBar, {
                [styles.active]: sideBarOpen === true,
            })}
        >
            <nav className={styles.sideBar__navigation}>
                <Link className={styles.sideBar__link} to="/">
                    <FontAwesomeIcon icon={faHome} color={"white"} />
                    Home
                </Link>
                <Link className={styles.sideBar__link} to="/settings">
                    <FontAwesomeIcon icon={faCog} color={"white"} />
                    Settings
                </Link>
            </nav>
        </div>
    );
};

export default SideBar;
