import { ReactElement } from "react";
import { Button, Stack, Typography } from "@mui/material";
import {
  FilePresentOutlined,
  DeleteOutline,
  GetAppOutlined,
} from "@mui/icons-material";
import { StackProps } from "@mui/system";

export interface DisplayDefaultProps {
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

const DisplayDefault = ({
  name,
  file,
  borderColor = "primary.main",
  placeholder = "Selecione um arquivo",
  deleteLabel = "Excluir",
  downloadLabel = "Download",
  fileSize,
  leftIcon = <FilePresentOutlined />,
  onDeleteFile,
  onDownloadFile,
}: DisplayDefaultProps) => {
  const downloadFile = () => {
    if (file) {
      const link = document.createElement("a");
      if (file instanceof File) {
        link.href = window.URL.createObjectURL(file as Blob);
      } else {
        link.href = file;
        link.target = "_blank";
      }
      link.download = name || "";
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    }
    if (onDownloadFile) onDownloadFile();
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      padding={4}
      alignItems="center"
      justifyContent="space-between"
      border="1px solid"
      borderRadius={1}
      borderColor={borderColor}
      bgcolor="background.paper"
    >
      <Stack direction="row" alignItems="center" spacing={3}>
        {leftIcon}
        <Stack direction="column">
          <Typography variant="subtitle2" color="text.primary">
            {name || placeholder}
          </Typography>
          {fileSize && (
            <Typography variant="body2" color="text.disabled">
              {fileSize}
            </Typography>
          )}
        </Stack>
      </Stack>
      <Stack>
        {(onDeleteFile || onDownloadFile) && (
          <Button
            onClick={onDeleteFile || downloadFile}
            // target="_blank"
            size="small"
            color="primary"
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              {onDeleteFile ? <DeleteOutline /> : <GetAppOutlined />}
              {onDeleteFile ? deleteLabel : downloadLabel}
            </Stack>
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default DisplayDefault;
