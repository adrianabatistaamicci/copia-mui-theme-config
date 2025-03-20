export interface ThreadCommentProps {
    id: number;
    sentDate?: string;
    messageBy?: string;
    comment?: string;
    submenu?: Array<{
        label: string;
        onClick: () => void;
    }>;
}
declare const ThreadComment: ({ sentDate, messageBy, comment, submenu, }: ThreadCommentProps) => import("react/jsx-runtime").JSX.Element;
export default ThreadComment;
