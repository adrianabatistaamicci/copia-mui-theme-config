import { Chip, ChipProps } from "@mui/material";
import Palette from "../../theme/palette";
import React from "react";

interface ChipSquareProps {
  size?: ChipProps["size"];
  variant?: ChipProps["variant"];
  color?: "default" | "secondary" | "tertiary";
  label: React.ReactNode;
  disabled?: ChipProps["disabled"];
}

const ChipSquare = ({
  color = "default",
  label,
  size,
  variant,
  disabled,
}: ChipSquareProps) => {
  const { palette } = Palette();
  const chipColor = {
    default: "#0F2A5B",
    secondary: palette.secondary[850],
    tertiary: palette.tertiary[800],
  };

  return (
    <Chip
      sx={{
        color: palette.getContrastText(`${chipColor[`${color}`]}`),
        borderRadius: 1,
        bgcolor: `${chipColor[`${color}`]}`,
      }}
      disabled={disabled}
      size={size}
      label={label}
      variant={variant}
    />
  );
};
export default ChipSquare;
