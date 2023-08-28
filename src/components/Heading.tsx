import { HeadingProps } from "@/types";

export const Heading: React.FC<HeadingProps> = ({ text, className }) => {
  return <h1 className={`${className}`}>{text}</h1>;
};
