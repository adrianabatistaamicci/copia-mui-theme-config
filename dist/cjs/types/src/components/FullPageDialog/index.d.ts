import React from "react";
import { StackProps } from "@mui/system";
export interface IFullPageDialog {
    open: boolean;
    bgColor?: StackProps["bgcolor"];
    title?: string;
    actionButton?: React.ReactNode;
    children?: React.ReactNode;
    handleClose?: () => void;
    handleSubmit?: () => void;
}
declare const FullPageDialog: ({ open, title, actionButton, children, handleClose, handleSubmit, bgColor, }: IFullPageDialog) => import("react/jsx-runtime").JSX.Element;
export default FullPageDialog;
