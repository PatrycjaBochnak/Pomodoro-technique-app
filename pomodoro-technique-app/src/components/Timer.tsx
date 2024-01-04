import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const target = new Date("11/11/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      {partyTime ? (
        <h1>Happy NYE</h1>
      ) : (
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
      )}
    </div>
  );
};

export default Timer;
