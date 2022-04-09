import { FC, forwardRef, InputHTMLAttributes, LegacyRef } from "react";
import React from "react";
import { Typography } from "@mui/material";

interface TextProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  error?: string;
}

const Textarea: FC<TextProps> = forwardRef(
  ({ name, label, error, ...props }, ref: LegacyRef<HTMLTextAreaElement>) => {
    return (
      <>
        <Typography>{label}</Typography>
        <textarea minLength={100} id={name} ref={ref} {...props} />
        {error && <Typography>{error}</Typography>}
      </>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
