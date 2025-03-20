import { ReactElement } from "react";
import { StackProps } from "@mui/system";
export interface DisplayDefaultProps {
    name?: string;
    file?: File | string;
    borderColor?: StackProps["borderColor"];
    deleteLabel?: string;
    downloadLabel?: string;
    placeholder?: string;
    fileSize?: string;
    leftIcon?: ReactElement;
    onDeleteFile?: () => void;
    onDownloadFile?: () => void;
}
declare const DisplayDefault: ({ name, file, borderColor, placeholder, deleteLabel, downloadLabel, fileSize, leftIcon, onDeleteFile, onDownloadFile, }: DisplayDefaultProps) => import("react/jsx-runtime").JSX.Element;
export default DisplayDefault;
