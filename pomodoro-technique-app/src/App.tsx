import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const target = new Date("12/31/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor((difference / 1000) * 60 * 60 * 24);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
        setHours(h)
        const m = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60)
        )
        setMinutes(m)
        const s = Math.floor((difference % (1000 * 60)) / 1000)
        setSeconds(s)
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="timer-inner">
        <div className="timer-segment">
          <span className="time">{days}</span>
          <span className="label">Days</span>
        </div>
        <div className="timer-segment">
          <span className="time">{hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="timer-segment">
          <span className="time">{minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="timer-segment">
          <span className="time">{seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>
  );
  
}

export default App;
