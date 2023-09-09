import { useState } from "react";

export const useStatusCheckbox = () => {
  const [status, setStatus] = useState<string[]>([]);

  const handleStatusChange = (value: string, checked: boolean) => {
    if (checked) {
      setStatus((prevStatus) => [...prevStatus, value]);
    } else {
      setStatus((prevStatus) => prevStatus.filter((s) => s !== value));
    }
  };

  return {
    status,
    handleStatusChange,
  };
};
