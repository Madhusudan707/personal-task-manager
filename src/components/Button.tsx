import { ButtonProps } from "@/types";
import { baseStyles, variantStyles } from "@/LocalData";
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  label,
  active,
  className = "",
  children,
  onClick,
  ...rest
}) => {
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button onClick={onClick} className={buttonClasses.trim()} {...rest}>
      {children}
    </button>
  );
};
