export type ConfirmationDialogProps = {
    open: boolean;
    title: string;
    description: string;
    loading?: boolean;
    cancelText?: string;
    confirmText?: string;
    onClose: () => void;
    onConfirm: () => void;
};
declare const ConfirmationDialog: ({ open, title, description, loading, cancelText, confirmText, onClose, onConfirm, }: ConfirmationDialogProps) => import("react/jsx-runtime").JSX.Element;
export default ConfirmationDialog;
