import React, { useEffect, useState } from 'react';

const Timer: React.FC = () => {
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
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Pomodoro app</h1>
      <div>
        <div>
          <span>{days}</span>
          <span>Days</span>
        </div>
        <div>
          <span>{hours}</span>
          <span>Hours</span>
        </div>
        <div>
          <span>{minutes}</span>
          <span>Minutes</span>
        </div>
        <div>
          <span>{seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
g