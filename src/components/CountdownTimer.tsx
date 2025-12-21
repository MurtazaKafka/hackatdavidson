import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const eventDate = new Date("2026-02-20T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center lg:justify-start">
      <div className="flex flex-col items-center bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 min-w-[70px]">
        <span className="text-3xl font-bold text-primary">{timeLeft.days}</span>
        <span className="text-xs text-muted-foreground uppercase">Days</span>
      </div>
      <div className="flex flex-col items-center bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 min-w-[70px]">
        <span className="text-3xl font-bold text-primary">{timeLeft.hours}</span>
        <span className="text-xs text-muted-foreground uppercase">Hours</span>
      </div>
      <div className="flex flex-col items-center bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 min-w-[70px]">
        <span className="text-3xl font-bold text-primary">{timeLeft.minutes}</span>
        <span className="text-xs text-muted-foreground uppercase">Minutes</span>
      </div>
      <div className="flex flex-col items-center bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 min-w-[70px]">
        <span className="text-3xl font-bold text-primary">{timeLeft.seconds}</span>
        <span className="text-xs text-muted-foreground uppercase">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
