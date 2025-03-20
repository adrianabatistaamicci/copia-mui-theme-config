import { ThreadBoxDocumentsProps } from "../ThreadBoxDocuments";
import { ThreadCommentProps } from "../ThreadComment";
interface IListDocument {
    name: string;
}
interface IDocumentThread {
    id: number;
    title?: string;
    date?: string;
    sentDate?: string;
    comment?: React.ReactNode;
    fileSize?: string;
    createdBy?: string;
    isActive?: boolean;
    atattachmentUrl?: string;
    attatchmentName?: string;
    attachmentDescription?: string;
    showInputMessage?: boolean;
    showMessageCollapse?: boolean;
}
export interface ThreadTimelineProps {
    onSubmitMessage?: (message: string) => void;
    onClickCollapse?: (threadId: number) => void;
    onDownloadFile?: () => void;
    setComment?: (comment: string) => void;
    inputMessage?: string;
    loading?: boolean;
    threadComments?: Array<{
        id: number;
        historyComments?: Array<ThreadCommentProps>;
    }>;
    documentThread: Array<IDocumentThread>;
    listDocuments?: Array<IListDocument>;
    threadBoxDocumentsProps?: (thread: IDocumentThread) => Partial<ThreadBoxDocumentsProps>;
    threadCommentProps?: (comment: ThreadCommentProps) => Partial<ThreadCommentProps>;
}
declare const ThreadTimelineDocuments: ({ loading, documentThread, listDocuments, onClickCollapse, onSubmitMessage, setComment, inputMessage, onDownloadFile, threadComments, threadBoxDocumentsProps, threadCommentProps, }: ThreadTimelineProps) => import("react/jsx-runtime").JSX.Element;
export default ThreadTimelineDocuments;
