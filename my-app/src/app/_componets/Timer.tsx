"use client";
import { useEffect, useState } from "react";

export default function Timer() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 11);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const boxes = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl flex justify-around items-center py-10 px-4">
        {boxes.map((box, i) => (
          <div key={i} className="text-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg animate-pulse">
              {box.value.toString().padStart(2, "0")}
            </h1>
            <h2 className="text-sm text-gray-200 uppercase tracking-wide">{box.label}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
