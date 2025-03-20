export interface IProductVariant {
    id: number;
    seller_id: number;
    supplier_id: number;
    cnpj: string;
    variant_name: string;
}
export interface IDocumentTableItem {
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
export interface IDocumentTable {
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
declare const DocumentTable: ({ items, showCheckbox, isStepCompleted, isCompanyApprove, setItemsIds, itemsIds, maxHeight, isReusable, handleOnDownloadFile, handleEditSKU, handleRemoveApproval, handleDelete, loading, allowedTenantTypes, projectPackagingId, }: IDocumentTable) => import("react/jsx-runtime").JSX.Element;
export default DocumentTable;
