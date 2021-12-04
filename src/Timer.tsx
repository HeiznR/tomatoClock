import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [active, setActive] = useState(false);
  const handleChande: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTimeLeft(Number(e.target.value));
  };

  useEffect(() => {
    if (timeLeft > 0 && active) {
      setTimeout(setTimeLeft, 1000, (timeLeft: number) => timeLeft - 1);
    } else setActive(false);
  }, [timeLeft, active]);

  return (
    <div>
      <input type="text" onChange={handleChande} value={timeLeft} />
      <button onClick={() => setActive(!active)}></button>
      <div>{timeLeft}</div>
    </div>
  );
};

export default Timer;
