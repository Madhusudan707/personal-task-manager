import { InputProps } from "@/types";

export const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  className,
  value,
  name,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      defaultValue={value}
      name={name}
      onChange={onChange}
    />
  );
};
