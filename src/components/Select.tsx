import { forwardRef } from "react";
import { SelectProps } from "@/types";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, className, value, name, onChange, isShowDefault }, ref) => {
    return (
      <select
        className={className}
        defaultValue={value}
        name={name}
        onChange={onChange}
        ref={ref}
      >
        {isShowDefault && <option value="">Select Status</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";
