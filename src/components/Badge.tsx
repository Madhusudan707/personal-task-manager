import { BadgeProps } from "@/types";

export const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return <div className={`${className}  rounded-md`}>{children}</div>;
};
