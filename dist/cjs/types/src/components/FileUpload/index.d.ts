export type FileUploadProps = {
    file?: File;
    setFile: (file?: File) => void;
    deleteFile: (file?: File) => void;
    acceptedTypes?: Array<string>;
    errorMsg?: string;
    permittedTypesDisplay: string;
    bgcolor?: string;
    borderStyle?: string;
    borderColor?: string;
    variant?: string;
    type?: "one" | "multiple";
    showMenuList?: boolean;
    menuListProps?: Array<{
        label: string;
        action: () => void;
        touchInputRef?: boolean;
    }>;
};
declare const FileUpload: ({ file, setFile, deleteFile, acceptedTypes, errorMsg, permittedTypesDisplay, bgcolor, borderStyle, borderColor, variant, type, showMenuList, menuListProps, }: FileUploadProps) => import("react/jsx-runtime").JSX.Element;
export default FileUpload;
