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

  return date;
};

export { useCurrentDate };
