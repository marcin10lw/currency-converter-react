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
    
    return (
        <p className="form__date">Dzisiaj jest {date.toLocaleTimeString()}</p>
    );
}

export default Clock;