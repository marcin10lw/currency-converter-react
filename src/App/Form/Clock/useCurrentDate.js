import { useState, useEffect } from "react";

const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const dateIntervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(dateIntervalId);
    };
  }, [date]);

  const day = date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const time = date.toLocaleTimeString();

  return date;
};

export { useCurrentDate };
