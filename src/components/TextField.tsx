import { FC, forwardRef, InputHTMLAttributes, LegacyRef } from "react";
import React from "react";
import { Typography } from "@mui/material";

interface TextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
}

const TextField: FC<TextProps> = forwardRef(
  ({ name, label, error, ...props }, ref: LegacyRef<HTMLInputElement>) => {
    return (
      <>
        <Typography>{label}</Typography>
        <input id={name} ref={ref} {...props} />
        {error && <Typography>{error}</Typography>}
      </>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
