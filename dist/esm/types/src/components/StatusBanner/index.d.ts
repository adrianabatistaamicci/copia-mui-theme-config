import { ReactElement, ReactNode } from "react";
import { ChipOwnProps } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
interface IStatusBannerProps {
    title: string;
    content?: ReactNode;
    status?: string;
    statusColor?: ChipOwnProps["color"];
    actionLabel?: string;
    actionIcon?: ReactElement<SvgIconComponent>;
    onAction?: () => void;
}
declare const StatusBanner: ({ title, content, status, statusColor, actionLabel, actionIcon, onAction, }: IStatusBannerProps) => import("react/jsx-runtime").JSX.Element;
export default StatusBanner;
