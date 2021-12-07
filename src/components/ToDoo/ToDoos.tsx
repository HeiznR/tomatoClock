import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { addRecord } from "../../redux/Reducers/ToDoo";
import OneToDoo from "./oneToDoo";
import styles from "./ToDoos.module.scss";

const ToDo: FC = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>("");
    const records = useTypedSelector((state) => state.toDoo);
    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(String(e.target.value));
    };
    return (
        <div className={styles.todoo}>
            <div className={styles.todoo__menu}>
                <input type="text" onChange={handleInput} value={value} />
                <button
                    disabled={value ? false : true}
                    onClick={() => {
                        dispatch(addRecord(value));
                    }}
                >
                    Add
                </button>
            </div>
            <div className={styles.todoo__activeElements}>
                <p>Active Elemnts</p>
                {records.activeRecords.map((record, index) => {
                    return (
                        <OneToDoo
                            type={"active"}
                            index={index}
                            value={record}
                        />
                    );
                })}
            </div>
            <div className={styles.todoo__doneElements}>
                <p>Done elements</p>
                {records.doneRecords.map((record, index) => {
                    return (
                        <OneToDoo type={"done"} index={index} value={record} />
                    );
                })}
            </div>
        </div>
    );
};

export default ToDo;
