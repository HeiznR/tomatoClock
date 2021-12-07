import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { addRecord } from "../../redux/Reducers/ToDoo";
import styles from "./ToDo.module.scss";

const ToDo: FC = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>("");
    const records = useTypedSelector((state) => state.toDoo);
    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(String(e.target.value));
    };
    return (
        <div className={styles.todo}>
            <input type="text" onChange={handleInput} value={value} />
            <button
                onClick={() => {
                    dispatch(addRecord(value));
                }}
            >
                Add
            </button>
            {records.mass.map((record) => {
                return <li>{record}</li>;
            })}
        </div>
    );
};

export default ToDo;
