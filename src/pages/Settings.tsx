import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import MainLayout from "../layouts/MainLayout";
import { setBreakLength, setWorkLength } from "../redux/Reducers/Timer";
import styles from "./Settings.module.scss";

const Settings = () => {
    const defaultValues = useTypedSelector((state) => state.timer);
    const [values, setValues] = useState({
        work: moment.duration(defaultValues.workLength, "s").minutes(),
        break: moment.duration(defaultValues.breakLength, "s").minutes(),
    });
    const dispatch = useDispatch();
    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValues({ ...values, [e.target.name]: Number(e.target.value) });
    };

    return (
        <>
            <MainLayout>
                <p className={styles.Logo}>Settings</p>
                <div className={styles.settings}>
                    <div
                        className={`${styles.settings__workTime} ${styles.settings__div}`}
                    >
                        <p>Work Time</p>
                        <input
                            type="number"
                            value={values.work}
                            name="work"
                            onChange={handleInput}
                        />
                        <button
                            onClick={() => {
                                dispatch(setWorkLength(values.work));
                            }}
                        >
                            Set
                        </button>
                    </div>
                    <div className={styles.settings__div}>
                        <p>Break Time</p>
                        <input
                            type="number"
                            value={values.break}
                            name="break"
                            onChange={handleInput}
                        />
                        <button
                            onClick={() => {
                                dispatch(setBreakLength(values.break));
                            }}
                        >
                            Set
                        </button>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Settings;
