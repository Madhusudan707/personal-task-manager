import { SelectProps } from "@/types";

export const Select: React.FC<SelectProps> = ({
  options,
  className,
  value,
  name,
  onChange,
}) => {
  return (
    <select
      className={className}
      defaultValue={value}
      name={name}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
