import { format, isValid } from "date-fns";

export const formatDate = (date) => {
  const parsedDate = new Date(date);
  if (!isValid(parsedDate)) {
    return null;
  }
  return format(parsedDate, "MMM dd, yyyy");
};
