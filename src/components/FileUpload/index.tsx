import {
  UploadFileOutlined,
  AddBoxOutlined,
  Delete,
  UploadFile,
  CheckCircle,
} from "@mui/icons-material";

import {
  Stack,
  Box,
  Typography,
  Button,
  CircularProgress,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState, useRef, useEffect, ChangeEvent } from "react";
export type FileUploadProps = {
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

const FileUpload = ({
  file,
  setFile,
  deleteFile,
  acceptedTypes,
  errorMsg = "Formato do arquivo inválido",
  permittedTypesDisplay,
  bgcolor = "grey.50",
  borderStyle = "1px dashed",
  borderColor = "grey.300",
  variant = "full",
  type = "multiple",
  showMenuList = false,
  menuListProps,
}: FileUploadProps) => {
  // eslint-disable-next-line
  const [dragging, setDragging] = useState(false);
  const [fileChosed, setFileChosed] = useState(false);
  const [fileDelete, setFileDelete] = useState(false);
  const [addFile, setAddFile] = useState(true);
  const [showFile, setShowFile] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const transformSizeInKB = (fileSize: number) => (fileSize / 1024).toFixed(2);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);
  let dragCounter = 0;
  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter++;
    if (e.dataTransfer?.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };

  const handleDragOut = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter--;
    if (dragCounter === 0) {
      setDragging(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      setShowFile(true);
      setFileChosed(false);
      setAddFile(false);
      dragCounter = 0;
    }
  };

  const handleDeleteFile = () => {
    if (file) deleteFile(file);
    setShowFile(false);
    setAddFile(true);
  };

  const handleOpenDialog = () => {
    inputRef?.current?.click();
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (showMenuList) {
      handleClick(event);
    } else {
      handleOpenDialog();
    }
  };

  const handleFileChosed = (event: ChangeEvent<HTMLInputElement>) => {
    setFileChosed(true);
    setAddFile(false);
    const fileList = event?.target?.files;
    if (fileList && fileList[0]) {
      const chosenFile = fileList[0];
      if (acceptedTypes) {
        if (acceptedTypes.includes(chosenFile.type)) {
          setFile(chosenFile);
          setShowErrorMsg(false);
        } else {
          setShowErrorMsg(true);
        }
      } else {
        setFile(chosenFile);
      }
      if (!showErrorMsg) {
        setShowFile(true);
        setFileChosed(false);
      } else {
        setFileChosed(false);
        setAddFile(true);
      }
    }
  };

  useEffect(() => {
    const div = dropRef.current;
    div?.addEventListener("dragenter", handleDragIn);
    div?.addEventListener("dragleave", handleDragOut);
    div?.addEventListener("dragover", handleDrag);
    div?.addEventListener("drop", handleDrop);
    return () => {
      div?.removeEventListener("dragenter", handleDragIn);
      div?.removeEventListener("dragleave", handleDragOut);
      div?.removeEventListener("dragover", handleDrag);
      div?.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <Stack>
      {variant === "full" ? (
        <>
          {/* PARA PROCURAR E INSERIR O PRIMEIRO ARQUIVO */}
          {type === "multiple" || addFile ? (
            <Stack
              ref={dropRef}
              paddingY={6}
              paddingX={4}
              bgcolor={showErrorMsg ? "error.main" : bgcolor}
              border={borderStyle}
              borderColor={showErrorMsg ? "error.main" : borderColor}
              borderRadius={1}
              gap={2}
              alignItems="center"
            >
              <Box
                gap={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                {showErrorMsg ? (
                  <UploadFileOutlined color="error" />
                ) : (
                  <UploadFileOutlined color="primary" />
                )}
                <Box display="flex" alignItems="center" gap={1}>
                  <Button
                    id="btn-file-upload"
                    variant="text"
                    size="small"
                    component="label"
                    sx={{
                      color: "primary.main",
                      textDecoration: "underline",
                      border: "none",
                      padding: 0,
                      minWidth: "auto",
                      cursor: "pointer",
                    }}
                    onClick={handleOpenDialog}
                  >
                    <Typography variant="subtitle1">
                      Procurar no computador
                    </Typography>
                  </Button>
                  <Typography
                    variant="body1"
                    color="text.primary"
                    fontWeight="400"
                    lineHeight="28px"
                  >
                    ou arraste um arquivo até aqui
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="400"
                  lineHeight="20px"
                  textAlign="center"
                >
                  {permittedTypesDisplay || "SVG, PNG ou JPG (máx. 50MB)"}
                </Typography>
                {showErrorMsg && (
                  <Typography
                    variant="body2"
                    color="error"
                    fontWeight="400"
                    lineHeight="20px"
                    textAlign="center"
                  >
                    {errorMsg}
                  </Typography>
                )}
              </Box>
            </Stack>
          ) : (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              p={4}
              sx={{
                borderRadius: "4px",
                border: "1px solid var(--divider, rgba(25, 30, 30, 0.12))",
                background: "var(--background-paper-elevation-1, #FFF)",
                boxShadow:
                  "0px 1px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.20)",
              }}
            >
              {/* CASO JÁ TENHA OU ESTEJA CARREGANDO O ARQUIVO */}
              <Stack
                display="flex"
                direction="row"
                alignItems="center"
                spacing={4}
              >
                <Stack>
                  {showErrorMsg ? (
                    <Stack
                      display="flex"
                      direction="row"
                      alignItems="center"
                      spacing={4}
                    >
                      <UploadFile color="error" />
                      <Stack>
                        <Typography variant="body1" color="error">
                          O upload falhou
                        </Typography>
                        <Typography variant="body2" color="error">
                          {errorMsg}
                        </Typography>
                      </Stack>
                    </Stack>
                  ) : (
                    <Stack
                      display="flex"
                      direction="row"
                      alignItems="center"
                      spacing={4}
                    >
                      <UploadFile color="secondary" />
                      <Stack>
                        <Tooltip
                          title={file && file.name.length > 40 ? file.name : ""}
                        >
                          <Typography
                            variant="body1"
                            color="text.primary"
                            noWrap
                          >
                            {file && file.name.length > 40
                              ? `${file.name.slice(0, 40)}...`
                              : file?.name}
                          </Typography>
                        </Tooltip>
                        <Typography variant="body2" color="text.secondary">
                          {file && `${transformSizeInKB(file.size)}Kb •`}{" "}
                          {fileChosed && "Enviando"}
                          {showFile && "Envio concluído"}
                        </Typography>
                      </Stack>
                    </Stack>
                  )}
                </Stack>
              </Stack>
              <Stack
                display="flex"
                direction="row"
                alignItems="center"
                spacing={4}
              >
                {!fileChosed && (
                  <Stack
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                    bgcolor="grey.200"
                    padding={1}
                    borderRadius={1}
                    width={36}
                    height={36}
                  >
                    <IconButton size="medium" onClick={handleDeleteFile}>
                      <Delete sx={{ width: 20, height: 20 }} />
                    </IconButton>
                  </Stack>
                )}
                {fileChosed && <CircularProgress size={32} />}
                {showFile && (
                  <CheckCircle sx={{ width: 24, height: 24 }} color="success" />
                )}
              </Stack>
            </Stack>
          )}
        </>
      ) : (
        <Stack
          ref={dropRef}
          paddingY={6}
          paddingX={4}
          width="88px"
          height="88px"
          bgcolor={bgcolor}
          border={borderStyle}
          borderColor={borderColor}
          borderRadius={1}
          gap={2}
          alignItems="center"
          justifyContent="center"
          display="flex"
          flex-shrink="0"
          sx={{
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage:
              showFile && file ? `url(${URL.createObjectURL(file)})` : "none",
            filter: fileDelete ? "brightness(0.8)" : "none",
            zIndex: 0,
          }}
          onMouseOver={() => setFileDelete(true)}
          onMouseOut={() => setFileDelete(false)}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            {file && fileDelete && (
              <Stack
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
                bgcolor="grey.200"
                padding={1}
                borderRadius={1}
                width={36}
                height={36}
              >
                <IconButton size="medium" onClick={handleDeleteFile}>
                  <Delete sx={{ width: 20, height: 20 }} />
                </IconButton>
              </Stack>
            )}
            <Button
              id="btn-file-upload"
              variant="text"
              size="small"
              sx={{
                color: "primary.main",
                textDecoration: "underline",
                border: "none",
                padding: 0,
                minWidth: "auto",
                cursor: "pointer",
              }}
              onClick={(event) => {
                handleMenuClick(event);
              }}
            >
              {fileChosed && <CircularProgress size={40} />}
              {addFile && (
                <AddBoxOutlined
                  color="primary"
                  sx={{ width: 24, height: 24 }}
                />
              )}
            </Button>
          </Box>
        </Stack>
      )}
      <input
        ref={inputRef}
        type="file"
        hidden
        {...(acceptedTypes && acceptedTypes.length
          ? { accept: acceptedTypes.join(",") }
          : {})}
        onChange={(event) => {
          handleFileChosed(event);
        }}
      />
      <Menu
        id="upload-option-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": `upload-option-button`,
        }}
      >
        {menuListProps &&
          menuListProps.length > 0 &&
          menuListProps.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                item.touchInputRef ? handleOpenDialog() : item.action();
                handleClose();
              }}
            >
              <Typography align="left" minWidth={220}>
                {item.label}
              </Typography>
            </MenuItem>
          ))}
      </Menu>
    </Stack>
  );
};

export default FileUpload;
