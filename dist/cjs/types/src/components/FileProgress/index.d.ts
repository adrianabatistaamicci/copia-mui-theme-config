export interface FileProgressProps {
    progress: number;
    total: number | null;
    transferred: number | null;
}
declare const FileProgress: ({ progress, total, transferred }: FileProgressProps) => import("react/jsx-runtime").JSX.Element;
export default FileProgress;
