import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import useHook from "../hooks/useTimer";
import styles from "./MainPage.module.scss";
import ToDo from "../components/ToDoo/ToDoo";

const Timer = () => {
    const { handleTimerClick, effect, timeLeft, intervalId } = useHook();

    useEffect(() => {
        effect();
    }, [effect]);

    return (
        <MainLayout>
            <div className={styles.wrapper}>
                <p>{timeLeft}</p>
                <button
                    onClick={() => {
                        handleTimerClick();
                    }}
                >
                    {intervalId ? <i className="fas fa-play"></i> : "Start"}
                </button>
            </div>
            <ToDo />
        </MainLayout>
    );
};

export default Timer;
