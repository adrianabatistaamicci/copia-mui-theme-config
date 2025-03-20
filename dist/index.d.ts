import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1, { ReactNode, ReactElement } from 'react';
import { ChipOwnProps, TableCellProps, ChipProps } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import { StackProps } from '@mui/system';
import * as _mui_material_styles from '@mui/material/styles';

declare const AmicciThemeProvider: ({ children }: {
    children: JSX.Element;
}) => react_jsx_runtime.JSX.Element;

interface HeaderProps {
    title: string;
    titleLeft?: JSX.Element;
    titleRight?: JSX.Element;
    breadcrumbs?: Array<{
        title: string;
        route: string;
    }>;
    maxBreadcrumbs?: number;
    loading?: boolean;
    showReturn?: boolean;
    onReturn?: () => void;
}
declare const Header: ({ title, titleLeft, titleRight, breadcrumbs, maxBreadcrumbs, loading, showReturn, onReturn, }: HeaderProps) => react_jsx_runtime.JSX.Element;

type ConfirmationDialogProps = {
    open: boolean;
    title: string;
    description: string;
    loading?: boolean;
    cancelText?: string;
    confirmText?: string;
    onClose: () => void;
    onConfirm: () => void;
};
declare const ConfirmationDialog: ({ open, title, description, loading, cancelText, confirmText, onClose, onConfirm, }: ConfirmationDialogProps) => react_jsx_runtime.JSX.Element;

interface IStatusBannerProps {
    title: string;
    content?: ReactNode;
    status?: string;
    statusColor?: ChipOwnProps["color"];
    actionLabel?: string;
    actionIcon?: ReactElement<SvgIconComponent>;
    onAction?: () => void;
}
declare const StatusBanner: ({ title, content, status, statusColor, actionLabel, actionIcon, onAction, }: IStatusBannerProps) => react_jsx_runtime.JSX.Element;

interface DisplayDefaultProps {
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
declare const DisplayDefault: ({ name, file, borderColor, placeholder, deleteLabel, downloadLabel, fileSize, leftIcon, onDeleteFile, onDownloadFile, }: DisplayDefaultProps) => react_jsx_runtime.JSX.Element;

interface FileProgressProps {
    progress: number;
    total: number | null;
    transferred: number | null;
}
declare const FileProgress: ({ progress, total, transferred }: FileProgressProps) => react_jsx_runtime.JSX.Element;

interface UploadComponentProps {
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
declare const UploadComponent: ({ comment, file, acceptedTypes, errorMsg, setFile, setComment, onClickUpload, onDeleteFile, showInputComment, disableSendButton, loading, additionalComment, fileProgress, buttonLabel, uploadText, }: UploadComponentProps) => react_jsx_runtime.JSX.Element;

interface ThreadCommentProps {
    id: number;
    sentDate?: string;
    messageBy?: string;
    comment?: string;
    submenu?: Array<{
        label: string;
        onClick: () => void;
    }>;
}
declare const ThreadComment: ({ sentDate, messageBy, comment, submenu, }: ThreadCommentProps) => react_jsx_runtime.JSX.Element;

interface ThreadBoxProps {
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
}
declare const ThreadBox: ({ loading, title, threadId, createdBy, sentDate, message, fileSize, attachmentDescription, attachmentUrl, attachmentName, showMessageCollapse, setComment, onSubmitMessage, onClickCollapse, onDownloadFile, showInputMessage, historyComments, inputMessage, submenu, expanded, handleChange, isActive, threadCommentProps, }: ThreadBoxProps) => react_jsx_runtime.JSX.Element;

interface IDocumentThread$1 {
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
interface ThreadTimelineProps$1 {
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
    documentThread: Array<IDocumentThread$1>;
    threadBoxProps?: (thread: IDocumentThread$1) => Partial<ThreadBoxProps>;
    threadCommentProps?: (comment: ThreadCommentProps) => Partial<ThreadCommentProps>;
}
declare const ThreadTimeline: ({ loading, documentThread, onClickCollapse, onSubmitMessage, setComment, inputMessage, onDownloadFile, threadComments, threadBoxProps, threadCommentProps, }: ThreadTimelineProps$1) => react_jsx_runtime.JSX.Element;

interface IFullPageDialog {
    open: boolean;
    bgColor?: StackProps["bgcolor"];
    title?: string;
    actionButton?: React$1.ReactNode;
    children?: React$1.ReactNode;
    handleClose?: () => void;
    handleSubmit?: () => void;
}
declare const FullPageDialog: ({ open, title, actionButton, children, handleClose, handleSubmit, bgColor, }: IFullPageDialog) => react_jsx_runtime.JSX.Element;

interface AmicciBrandProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    color?: 'default' | 'white';
    variant?: 'full' | 'mini';
}
declare const AmicciBrand: ({ color, variant, ...props }: AmicciBrandProps) => react_jsx_runtime.JSX.Element;

interface IMenuItem {
    title: string;
    name: string;
    icon: ReactElement<SvgIconComponent>;
}
interface IListMenuProps {
    items: IMenuItem[];
    selectedIndex: number;
    onSelect: (index: number) => void;
}
declare const ListMenu: ({ items, selectedIndex, onSelect }: IListMenuProps) => react_jsx_runtime.JSX.Element;

type FileUploadProps = {
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
declare const FileUpload: ({ file, setFile, deleteFile, acceptedTypes, errorMsg, permittedTypesDisplay, bgcolor, borderStyle, borderColor, variant, type, showMenuList, menuListProps, }: FileUploadProps) => react_jsx_runtime.JSX.Element;

interface IFixedTableCell {
    left: string;
    rowZIndex: number;
    bgColor?: string;
    children: React.ReactNode;
    tableCellprops?: TableCellProps;
}
declare const FixedTableCell: ({ children, rowZIndex, bgColor, left, tableCellprops, }: IFixedTableCell) => react_jsx_runtime.JSX.Element;

interface IProductVariant {
    id: number;
    seller_id: number;
    supplier_id: number;
    cnpj: string;
    variant_name: string;
}
interface IDocumentTableItem {
    id: number;
    file_name: string;
    product_variant?: IProductVariant[] | string;
    responsible: string;
    data: string;
    approved: boolean;
    created_by_id: number;
    tenant_type: number;
    approved_action_log?: {
        responsible: string;
        created_at: string;
    };
    project_packaging: number;
}
interface IDocumentTable {
    items: IDocumentTableItem[];
    showCheckbox?: boolean;
    isStepCompleted?: boolean;
    isCompanyApprove?: boolean;
    itemsIds: any;
    setItemsIds: any;
    maxHeight?: string;
    isReusable?: string;
    handleOnDownloadFile: (item: IDocumentTableItem) => void;
    handleEditSKU: (item: IDocumentTableItem) => void;
    handleRemoveApproval: (item: IDocumentTableItem) => void;
    handleDelete: (item: IDocumentTableItem) => void;
    loading?: boolean;
    allowedTenantTypes?: number[];
    projectPackagingId?: number;
}
declare const DocumentTable: ({ items, showCheckbox, isStepCompleted, isCompanyApprove, setItemsIds, itemsIds, maxHeight, isReusable, handleOnDownloadFile, handleEditSKU, handleRemoveApproval, handleDelete, loading, allowedTenantTypes, projectPackagingId, }: IDocumentTable) => react_jsx_runtime.JSX.Element;

type ChipColor = "primary" | "secondary" | "info" | "success" | "inherit";
type ChipVariant = "outlined" | "filled";
interface ChipGroupProps {
    chipsData: {
        label: string;
        value: number;
        selected: boolean;
    }[];
    setChipsData: (value: {
        label: string;
        value: number;
        selected: boolean;
    }[]) => void;
    color?: ChipColor;
    variant?: ChipVariant;
}
declare const ChipGroup: ({ chipsData, setChipsData, color, variant, }: ChipGroupProps) => react_jsx_runtime.JSX.Element;

interface IListDocument$1 {
    name: string;
}
interface ThreadBoxDocumentsProps {
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
    listDocuments?: Array<IListDocument$1>;
}
declare const ThreadBoxDocuments: ({ loading, title, threadId, createdBy, sentDate, message, fileSize, attachmentDescription, attachmentUrl, attachmentName, showMessageCollapse, setComment, onSubmitMessage, onClickCollapse, onDownloadFile, showInputMessage, historyComments, inputMessage, submenu, expanded, handleChange, isActive, threadCommentProps, listDocuments, }: ThreadBoxDocumentsProps) => react_jsx_runtime.JSX.Element;

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
interface ThreadTimelineProps {
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
declare const ThreadTimelineDocuments: ({ loading, documentThread, listDocuments, onClickCollapse, onSubmitMessage, setComment, inputMessage, onDownloadFile, threadComments, threadBoxDocumentsProps, threadCommentProps, }: ThreadTimelineProps) => react_jsx_runtime.JSX.Element;

interface NewTopicProps {
    comment?: string;
    setComment?: (comment: string) => void;
    onClickSaveNewTopic: () => void;
    acceptedTypes?: string[] | null;
    disableSendButton?: boolean;
    loading?: boolean;
    buttonLabel?: string;
    uploadText?: string;
}
declare const NewTopic: ({ comment, acceptedTypes, setComment, onClickSaveNewTopic, disableSendButton, loading, buttonLabel, uploadText, }: NewTopicProps) => react_jsx_runtime.JSX.Element;

interface ChipSquareProps {
    size?: ChipProps["size"];
    variant?: ChipProps["variant"];
    color?: "default" | "secondary" | "tertiary";
    label: React$1.ReactNode;
    disabled?: ChipProps["disabled"];
}
declare const ChipSquare: ({ color, label, size, variant, disabled, }: ChipSquareProps) => react_jsx_runtime.JSX.Element;

interface NoteProps {
    note?: string;
    setNote?: (comment: string) => void;
    editable?: boolean;
    placeholder?: string;
    initialNote?: string;
}
declare const RichTextEditorBox: ({ note, setNote, editable, placeholder, initialNote, }: NoteProps) => react_jsx_runtime.JSX.Element;

interface RichTextNoteProps {
    note?: string;
}
declare const RichTextDisplay: ({ note }: RichTextNoteProps) => react_jsx_runtime.JSX.Element;

interface ImageType {
    id: number;
    image: string | null;
}
interface ICase {
    id: number;
    name: string;
    client_name: string;
    first_topic: string;
    second_topic: string;
    third_topic: string;
    fourth_topic: string;
    images: ImageType[];
}
type CaseViewerProps = {
    sellerCases: Array<ICase>;
    loading: boolean;
};
declare const CaseViewer: ({ sellerCases, loading }: CaseViewerProps) => react_jsx_runtime.JSX.Element;

interface AmicciFooterProps {
    supportUrl: string;
}
declare const AmicciFooter: ({ supportUrl }: AmicciFooterProps) => react_jsx_runtime.JSX.Element;

interface IStepCardComponent {
    icon: JSX.Element;
    title: string;
    progress?: string;
    showProgressBar?: boolean;
    onClick: () => void;
    date?: string | null;
    chipStatus?: React$1.ReactNode;
    selected?: boolean;
    disabled?: boolean;
    isProjectDisabled?: boolean;
    toggleShowStepCardDeadlinesDialog?: (() => void) | null;
}
declare const StepCardComponent: ({ icon, title, progress, onClick, date, chipStatus, selected, disabled, isProjectDisabled, showProgressBar, toggleShowStepCardDeadlinesDialog, }: IStepCardComponent) => react_jsx_runtime.JSX.Element;

interface AmyBannerProps {
    title: string;
    description?: string;
    textAlert?: string;
    iconMarginBottom?: number;
}
declare const AmyBanner: ({ title, description, textAlert, iconMarginBottom, }: AmyBannerProps) => react_jsx_runtime.JSX.Element;

declare const theme: _mui_material_styles.Theme;

export { AmicciBrand, AmicciFooter, AmicciThemeProvider, AmyBanner, CaseViewer, ChipGroup, ChipSquare, ConfirmationDialog, DisplayDefault, DocumentTable, FileProgress, FileUpload, FixedTableCell, FullPageDialog, Header, ListMenu, NewTopic, RichTextDisplay, RichTextEditorBox, StatusBanner, StepCardComponent, ThreadBox, ThreadBoxDocuments, ThreadComment, ThreadTimeline, ThreadTimelineDocuments, UploadComponent, theme };
