import { ParagraphProps } from "@/types";

export const Paragraph: React.FC<ParagraphProps> = ({ text, className }) => {
  return <p className={className}>{text ?? "Username"}</p>;
};
