// components/StatusCheckbox.tsx

import { useStatusCheckbox } from "@/hooks";

export const StatusCheckbox = () => {
  const { status, handleStatusChange } = useStatusCheckbox();

  return (
    <div className=" flex items-baseline ">
      <div className="space-x-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            value="completed"
            checked={status.includes("completed")}
            onChange={(e) => handleStatusChange("completed", e.target.checked)}
            className="form-checkbox text-blue-600 h-5 w-5"
          />
          <span className="ml-2 text-2xl">Completed</span>
        </label>
      </div>
    </div>
  );
};
