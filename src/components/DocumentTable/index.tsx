/* eslint-disable no-nested-ternary */
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Box,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Stack,
  Typography,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import {
  FileDownloadOutlined,
  FolderOffOutlined,
  MoreVertOutlined,
} from "@mui/icons-material";
import { useState } from "react";

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

const shouldShowIconButton = (
  tenant_type: number,
  allowedTenantTypes: number[]
) => allowedTenantTypes.includes(tenant_type);

const DocumentTable = ({
  items,
  showCheckbox = true,
  isStepCompleted = true,
  isCompanyApprove = true,
  setItemsIds,
  itemsIds,
  maxHeight,
  isReusable = "Pré-definido",
  handleOnDownloadFile,
  handleEditSKU,
  handleRemoveApproval,
  handleDelete,
  loading,
  allowedTenantTypes,
  projectPackagingId,
}: IDocumentTable) => {
  const [selectedItem, setSelectedItem] = useState<IDocumentTableItem | null>(
    null
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: IDocumentTableItem
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(item);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedItem(null);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const id = Number(value);

    setItemsIds((prevItemsIds: any) => {
      if (checked) {
        return prevItemsIds.includes(id) ? prevItemsIds : [...prevItemsIds, id];
      }
      return prevItemsIds.filter((existingId: number) => existingId !== id);
    });
  };

  const shouldShowCheckbox = (documentItems: IDocumentTableItem[]) =>
    !documentItems.every((item) => item.approved);
  const showCheckboxes = showCheckbox && shouldShowCheckbox(items);

  return (
    <TableContainer
      sx={{
        border: "1px solid",
        borderColor: "grey.300",
        borderRadius: "4px",
        overflow: "auto",
        maxHeight: maxHeight || "none",
      }}
    >
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Documento</TableCell>
            <TableCell padding="none">SKU</TableCell>
            <TableCell padding="none">Responsável</TableCell>
            <TableCell padding="none">Data</TableCell>
            <TableCell padding="none" />
            <TableCell padding="none" />
            <TableCell padding="none" />
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={7} align="center">
                <CircularProgress size={20} />
              </TableCell>
            </TableRow>
          ) : items?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7}>
                <Stack
                  minHeight={150}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Stack
                    borderRadius="50%"
                    p={8}
                    sx={{
                      backgroundImage:
                        "linear-gradient(180deg, #E9E9E9 0%, rgba(255, 255, 255, 0.00) 100%)",
                    }}
                  >
                    <FolderOffOutlined
                      sx={{ fontSize: 50, color: "grey.300" }}
                    />
                  </Stack>
                  <Typography variant="caption" color="text.disabled" mt={-6}>
                    Nenhum documento enviado
                  </Typography>
                </Stack>
              </TableCell>
            </TableRow>
          ) : (
            items?.map((item, index) => (
              <TableRow
                key={item.id}
                selected={itemsIds.includes(item.id)}
                sx={{
                  backgroundColor: index % 2 === 0 ? "inherit" : "grey.50",
                  "&.Mui-selected": {
                    backgroundColor: "primary",
                  },
                }}
              >
                <TableCell sx={{ py: showCheckboxes ? 0 : 1 }}>
                  <Box display="flex" alignItems="center">
                    {showCheckboxes && (
                      <Checkbox
                        size="small"
                        sx={{ m: 0, pr: 2, pl: 0 }}
                        value={Number(item.id)}
                        onChange={(e) => handleCheckbox(e)}
                        checked={itemsIds.includes(Number(item.id))}
                      />
                    )}
                    {item?.file_name && (
                      <Tooltip
                        title={
                          item.file_name?.length > 60 ? item.file_name : ""
                        }
                      >
                        <Typography variant="body2" color="text.primary">
                          {item.file_name?.length > 60
                            ? `${item.file_name.substring(0, 60)}...`
                            : item.file_name}
                        </Typography>
                      </Tooltip>
                    )}
                  </Box>
                </TableCell>
                <TableCell sx={{ py: showCheckboxes ? 0 : 1 }} padding="none">
                  <Box display="flex" alignItems="center">
                    <Tooltip
                      title={
                        typeof item.product_variant === "string"
                          ? item.product_variant
                          : item?.product_variant &&
                            item?.product_variant?.length > 0 &&
                            item?.product_variant[0]?.variant_name?.length > 50
                          ? item.product_variant[0]?.variant_name
                          : ""
                      }
                    >
                      <Typography variant="body2" color="text.secondary">
                        {typeof item.product_variant === "string"
                          ? item.product_variant
                          : item?.product_variant &&
                            item?.product_variant?.length > 0
                          ? item?.product_variant[0]?.variant_name?.length > 50
                            ? `${item?.product_variant[0]?.variant_name.slice(
                                0,
                                50
                              )}...`
                            : item?.product_variant[0]?.variant_name
                          : "Nenhum SKU relacionado"}
                      </Typography>
                    </Tooltip>
                    {Array.isArray(item?.product_variant) &&
                      item?.product_variant?.length > 1 && (
                        <Tooltip
                          title={
                            <div style={{ whiteSpace: "pre-line" }}>
                              {item?.product_variant
                                .slice(1)
                                .map((variant: IProductVariant) => (
                                  <div>• {variant?.variant_name}</div>
                                ))}
                            </div>
                          }
                        >
                          <Chip
                            label={`+${item?.product_variant?.length - 1}`}
                            size="small"
                            sx={{ ml: 1 }}
                          />
                        </Tooltip>
                      )}
                  </Box>
                </TableCell>
                <TableCell sx={{ py: showCheckboxes ? 0 : 1 }} padding="none">
                  {projectPackagingId !== item.project_packaging ? (
                    <Typography variant="body2" color="text.secondary">
                      {isReusable}
                    </Typography>
                  ) : (
                    <Tooltip
                      title={
                        item.responsible?.length > 25 ? item?.responsible : ""
                      }
                    >
                      <Typography variant="body2" color="text.secondary">
                        {item.responsible?.length > 25
                          ? `${item.responsible.slice(0, 25)}...`
                          : item.responsible}
                      </Typography>
                    </Tooltip>
                  )}
                </TableCell>
                <TableCell sx={{ py: showCheckboxes ? 0 : 1 }} padding="none">
                  <Typography variant="body2" color="text.secondary">
                    {item.data}
                  </Typography>
                </TableCell>
                <TableCell align="right" padding="none">
                  {item.approved &&
                    (item.approved_action_log?.responsible &&
                    item.approved_action_log?.created_at ? (
                      <Tooltip
                        title={`${item.approved_action_log.responsible} - ${item.approved_action_log.created_at}`}
                      >
                        <Chip
                          label="Aprovado"
                          color="success"
                          size="small"
                          variant="filled"
                          sx={{ mr: 1 }}
                        />
                      </Tooltip>
                    ) : (
                      <Chip
                        label="Aprovado"
                        color="success"
                        size="small"
                        variant="filled"
                        sx={{ mr: 1 }}
                      />
                    ))}
                </TableCell>
                <TableCell padding="none">
                  <IconButton
                    size="small"
                    onClick={() => handleOnDownloadFile(item)}
                  >
                    <FileDownloadOutlined sx={{ width: 20, height: 20 }} />
                  </IconButton>
                </TableCell>
                <TableCell padding="none">
                  {isStepCompleted &&
                    shouldShowIconButton(
                      item.tenant_type,
                      allowedTenantTypes || []
                    ) && (
                      <IconButton
                        size="small"
                        id="user-options-button"
                        aria-controls={open ? "user-options-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={(e) => {
                          handleClick(e, item);
                        }}
                      >
                        <MoreVertOutlined sx={{ width: 20, height: 20 }} />
                      </IconButton>
                    )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <Menu
        id="user-options-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": `user-options-button`,
        }}
      >
        <MenuItem>
          <Button
            variant="text"
            onClick={() => {
              handleEditSKU(selectedItem!);
              handleClose();
            }}
          >
            <Typography align="left" minWidth={200}>
              Editar SKU relacionado
            </Typography>
          </Button>
        </MenuItem>
        {selectedItem?.approved && isCompanyApprove && (
          <MenuItem>
            <Button
              variant="text"
              onClick={() => {
                handleRemoveApproval(selectedItem!);
                handleClose();
              }}
            >
              <Typography align="left" minWidth={200}>
                Remover aprovação
              </Typography>
            </Button>
          </MenuItem>
        )}
        <MenuItem>
          <Button
            variant="text"
            onClick={() => {
              handleDelete(selectedItem!);
              handleClose();
            }}
          >
            <Typography align="left" minWidth={200} color="error">
              Excluir
            </Typography>
          </Button>
        </MenuItem>
      </Menu>
    </TableContainer>
  );
};

export default DocumentTable;
