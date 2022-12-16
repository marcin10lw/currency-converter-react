import { useCurrentDate } from "./useCurrentDate";
import { StyledDate } from "./styled";

const Clock = () => {
  const [day, time] = useCurrentDate();
  
  return <StyledDate>{`Dzisiaj jest ${day}, ${time}`}</StyledDate>;
};

export default Clock;
