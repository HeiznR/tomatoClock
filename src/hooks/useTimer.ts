import React, { useState } from "react";
import { useTypedSelector } from "./useTypedSelector";

const useTimer = () => {
    const timer = useTypedSelector((state) => state.timer);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
    const [timeLeft, setTimeLeft] = useState(timer.workLength);
    const [session, setSession] = useState("session");

    const handleTimerClick = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(undefined);
            setTimeLeft(timer.workLength);
            return;
        }
        const newIntervalId = setInterval(() => {
            setTimeLeft((timeLeft) => {
                if (timeLeft > 0) {
                    return timeLeft - 1;
                }
                return timeLeft;
            });
        }, 1000);
        setIntervalId(newIntervalId);
    };

    const effect = () => {
        if (timeLeft === 0) {
            if (session === "session") {
                setSession("break");
                setTimeLeft(timer.breakLength);
            } else if (session === "break") {
                setSession("session");
                setTimeLeft(timer.workLength);
            }
        }
    };
    return { effect, handleTimerClick, timeLeft, intervalId, session };
};

export default useTimer;
