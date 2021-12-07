import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import useHook from "../hooks/useTimer";
import styles from "./MainPage.module.scss";
import ToDo from "../components/ToDoo/ToDoos";
import moment from "moment";

const Timer = () => {
    const { handleTimerClick, effect, timeLeft, intervalId, session } =
        useHook();
    useEffect(() => {
        effect();
    }, [effect]);
    let MinutesLeft = moment.duration(timeLeft, "s").minutes();
    let SecondsLeft = moment.duration(timeLeft, "s").seconds();
    return (
        <MainLayout>
            <div className={styles.wrapper}>
                <main>
                    <p>{session === "session" ? "Work time" : "Break Time"}</p>
                    <p>
                        {MinutesLeft < 10 ? `0${MinutesLeft}` : MinutesLeft}:
                        {SecondsLeft < 10 ? `0${SecondsLeft}` : SecondsLeft}
                    </p>
                    <button
                        onClick={() => {
                            handleTimerClick();
                        }}
                    >
                        {intervalId ? "Stop" : "Start"}
                    </button>
                </main>
                <ToDo />
            </div>
        </MainLayout>
    );
};

export default Timer;
