export interface NoteProps {
    note?: string;
    setNote?: (comment: string) => void;
    editable?: boolean;
    placeholder?: string;
    initialNote?: string;
}
declare const RichTextEditorBox: ({ note, setNote, editable, placeholder, initialNote, }: NoteProps) => import("react/jsx-runtime").JSX.Element;
export default RichTextEditorBox;
