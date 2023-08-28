import { ErrorProps } from "@/types";
import { Paragraph } from ".";

export const ErrorMessage: React.FC<ErrorProps> = ({ errorText }) => {
  return <Paragraph className="text-red-500 text-xl" text={errorText} />;
};
