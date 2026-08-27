import { useEffect, useState } from "react";
import { EVENT_DATE } from "./data";

export function useCountdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const diff = Math.max(0, EVENT_DATE - now);
  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const totalHours = Math.floor(totalSeconds / 3600);
  const hours = totalHours % 24;
  const totalDays = Math.floor(totalHours / 24);
  const months = Math.floor(totalDays / 30);
  const days = totalDays % 30;

  return {
    months: String(months).padStart(2, "0"),
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}
