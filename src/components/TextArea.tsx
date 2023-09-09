import { forwardRef } from "react";
import { TextAreaProps } from "@/types";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { className, placeholder, rows = 4, cols = 40, value, name, onChange },
    ref
  ) => {
    return (
      <textarea
        className={className}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        defaultValue={value}
        name={name}
        onChange={onChange}
        ref={ref}
      />
    );
  }
);
