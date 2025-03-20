import { ThreadCommentProps } from "../ThreadComment";
interface IListDocument {
    name: string;
}
export interface ThreadBoxDocumentsProps {
    loading?: boolean;
    title?: string;
    threadId: number;
    createdBy?: string;
    sentDate?: string;
    message?: React.ReactNode;
    fileSize?: string;
    attachmentDescription?: string;
    attachmentUrl?: string;
    attachmentName?: string;
    onSubmitMessage?: (message: string) => void;
    onClickCollapse?: (threadId: number) => void;
    setComment?: (comment: string) => void;
    onDownloadFile?: () => void;
    showInputMessage?: boolean;
    collapseMessage?: string;
    showMessageCollapse?: boolean;
    historyComments?: Array<ThreadCommentProps>;
    inputMessage?: string;
    expanded?: number | false;
    handleChange: (panel: number) => void;
    submenu?: Array<{
        label: string;
        onClick: () => void;
    }>;
    threadCommentProps?: (comment: ThreadCommentProps) => Partial<ThreadCommentProps>;
    isActive?: boolean;
    listDocuments?: Array<IListDocument>;
}
declare const ThreadBoxDocuments: ({ loading, title, threadId, createdBy, sentDate, message, fileSize, attachmentDescription, attachmentUrl, attachmentName, showMessageCollapse, setComment, onSubmitMessage, onClickCollapse, onDownloadFile, showInputMessage, historyComments, inputMessage, submenu, expanded, handleChange, isActive, threadCommentProps, listDocuments, }: ThreadBoxDocumentsProps) => import("react/jsx-runtime").JSX.Element;
export default ThreadBoxDocuments;
