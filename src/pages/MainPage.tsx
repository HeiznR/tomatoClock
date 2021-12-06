import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "../layouts/MainLayout";

const Timer = () => {
  const [currentSession, setCurrentSession] = useState("Session");
  const [breakLength, setShortBreak] = useState(5);
  const [sessionLength, setSessionTime] = useState(10);
  const [timeLeft, setTimeLeft] = useState(sessionLength);


  useEffect(() => {
    if (timeLeft === 0) {
      if (currentSession === "Session") {
        setCurrentSession("Break");
        setTimeLeft(breakLength);
      } else if (currentSession === "Break") {
        setCurrentSession("Session");
        setTimeLeft(sessionLength);
      }
    }
  }, [breakLength, sessionLength, timeLeft, currentSession]);

  const handle = () => {
    const newInterval = setInterval(() => {
      setTimeLeft((timeLeft) => {
        const newTimeLeft = timeLeft - 1;
        if (newTimeLeft >= 0) {
          return timeLeft - 1;
        }

        return timeLeft;
      });
    }, 1000);
  };

  return (
    <MainLayout>
      <button onClick={handle}>Start</button>
      {timeLeft}
    </MainLayout>
  );
};

export default Timer;
