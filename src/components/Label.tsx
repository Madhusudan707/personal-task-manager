import { LabelProps } from "@/types";

export const Label: React.FC<LabelProps> = ({ htmlFor, text, className }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {text}
    </label>
  );
};
