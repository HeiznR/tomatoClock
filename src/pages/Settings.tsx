import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import MainLayout from "../layouts/MainLayout";
import { setBreakLength, setWorkLength } from "../redux/Reducers/Timer";

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
                <div>
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
                <div>
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
            </MainLayout>
        </>
    );
};

export default Settings;
