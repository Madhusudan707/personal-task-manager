import { FlexboxContainerProps } from "@/types";
import { FlexBoxContainerStyle } from "@/LocalData";
export const FlexBoxContainer: React.FC<FlexboxContainerProps> = ({
  children,
  className = null,
}) => {
  return (
    <div style={FlexBoxContainerStyle} className={`${className}`}>
      {children}
    </div>
  );
};
