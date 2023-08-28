import { TextAreaProps } from "@/types";

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  placeholder,
  rows = 4,
  cols = 40,
  value,
  name,
  onChange,
}) => {
  return (
    <textarea
      className={className}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      defaultValue={value}
      name={name}
      onChange={onChange}
    />
  );
};
