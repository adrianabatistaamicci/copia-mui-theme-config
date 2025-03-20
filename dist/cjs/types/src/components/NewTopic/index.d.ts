export interface NewTopicProps {
    comment?: string;
    setComment?: (comment: string) => void;
    onClickSaveNewTopic: () => void;
    acceptedTypes?: string[] | null;
    disableSendButton?: boolean;
    loading?: boolean;
    buttonLabel?: string;
    uploadText?: string;
}
declare const NewTopic: ({ comment, acceptedTypes, setComment, onClickSaveNewTopic, disableSendButton, loading, buttonLabel, uploadText, }: NewTopicProps) => import("react/jsx-runtime").JSX.Element;
export default NewTopic;
