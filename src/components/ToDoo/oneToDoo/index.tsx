import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { addToDoneRecords, deleteRecord } from "../../../redux/Reducers/ToDoo";
import styles from "./index.module.scss";
interface IProps {
    value: string;
    index: number;
    type: string;
}
const OneToDoo: FC<IProps> = ({ value, index, type }) => {
    const dispatch = useDispatch();
    return (
        <div className={styles.oneToDo}>
            <div>{value}</div>
            {type === "done" ? (
                ""
            ) : (
                <button
                    onClick={() =>
                        dispatch(
                            addToDoneRecords({
                                value,
                                index,
                            })
                        )
                    }
                >
                    <FontAwesomeIcon icon={faCheck} />
                </button>
            )}
            <button onClick={() => dispatch(deleteRecord({ index, type }))}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    );
};

export default OneToDoo;
