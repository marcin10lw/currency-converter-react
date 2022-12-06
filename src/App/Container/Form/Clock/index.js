import React, {useState, useEffect} from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const dateIntervalId = setInterval(() => {
          setDate(new Date());
        }, 1000);
    
        return () => {
          clearInterval(dateIntervalId);
        }
      }, [date]);
    
    const day = date.toLocaleDateString(
      undefined,
      {weekday: "long", day: "numeric", month: "long"}
    );
    const time = date.toLocaleTimeString();

    return (
        <p className="form__date">{`Dzisiaj jest ${day}, ${time}`}</p>
    );
}

export default Clock;