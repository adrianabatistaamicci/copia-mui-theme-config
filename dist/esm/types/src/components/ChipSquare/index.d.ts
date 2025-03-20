import { ChipProps } from "@mui/material";
import React from "react";
interface ChipSquareProps {
    size?: ChipProps["size"];
    variant?: ChipProps["variant"];
    color?: "default" | "secondary" | "tertiary";
    label: React.ReactNode;
    disabled?: ChipProps["disabled"];
}
declare const ChipSquare: ({ color, label, size, variant, disabled, }: ChipSquareProps) => import("react/jsx-runtime").JSX.Element;
export default ChipSquare;
