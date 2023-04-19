import { useCurrentDate } from "./useCurrentDate";
import { StyledDate } from "./styled";
import { format } from "date-fns";

const Clock = () => {
  const date = useCurrentDate();

  const formattedDate = format(date, "cccc',' do 'of' MMMM yyyy");
  return <StyledDate>{`Today's date: ${formattedDate}`}</StyledDate>;
};

export default Clock;
