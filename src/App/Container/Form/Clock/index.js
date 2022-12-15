import "./style.css";
import React, { useState, useEffect } from "react";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const [day, time] = useCurrentDate();
  
  return <p className="date">{`Dzisiaj jest ${day}, ${time}`}</p>;
};

export default Clock;
