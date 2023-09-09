import { forwardRef } from "react";
import { InputProps } from "@/types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", placeholder, className, value, name, onChange }, ref) => {
    return (
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        defaultValue={value ?? ""}
        name={name}
        onChange={onChange}
        ref={ref}
      />
    );
  }
);
