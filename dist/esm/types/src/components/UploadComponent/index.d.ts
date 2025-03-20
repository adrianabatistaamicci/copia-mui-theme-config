import { FileProgressProps } from "../FileProgress";
export interface UploadComponentProps {
    file?: File;
    setFile: (target: any) => void;
    comment?: string;
    setComment?: (comment: string) => void;
    onClickUpload: () => void;
    onDeleteFile: () => void;
    acceptedTypes?: string[] | null;
    errorMsg?: string;
    showInputComment?: boolean;
    disableSendButton?: boolean;
    loading?: boolean;
    additionalComment?: string;
    fileProgress?: FileProgressProps;
    buttonLabel?: string;
    uploadText?: string;
}
declare const UploadComponent: ({ comment, file, acceptedTypes, errorMsg, setFile, setComment, onClickUpload, onDeleteFile, showInputComment, disableSendButton, loading, additionalComment, fileProgress, buttonLabel, uploadText, }: UploadComponentProps) => import("react/jsx-runtime").JSX.Element;
export default UploadComponent;
