import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import { AddCircleOutline, AddCircle } from "@mui/icons-material";
import { useState, useRef } from "react";
import DisplayDefault from "../DisplayDefault";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import {
  RichTextEditor,
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  type RichTextEditorRef,
} from "mui-tiptap";
import FileProgress, { FileProgressProps } from "../FileProgress";

export interface UploadComponentProps {
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

const UploadComponent = ({
  comment,
  file,
  acceptedTypes = null,
  errorMsg = "Formato do arquivo invalido",
  setFile,
  setComment,
  onClickUpload,
  onDeleteFile,
  showInputComment = false,
  disableSendButton = false,
  loading = false,
  additionalComment,
  fileProgress,
  buttonLabel,
  uploadText,
}: UploadComponentProps) => {
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const inputRef = useRef(null);
  const rteRef = useRef<RichTextEditorRef>(null);

  const handleClickFile = () => {
    if (inputRef.current && !disableSendButton) {
      (inputRef.current as HTMLDivElement).querySelector("input")!.click();
    }
  };

  const handleChangeFile = (event: React.ChangeEvent<any>) => {
    const fileList = event?.target?.files;
    if (fileList && fileList[0]) {
      if (acceptedTypes) {
        if (acceptedTypes.includes(fileList[0].type)) {
          setFile(fileList[0]);
          setShowErrorMsg(false);
          loading = true;
        } else {
          setShowErrorMsg(true);
        }
      } else {
        setFile(fileList[0]);
      }
    }
  };

  return (
    <Stack>
      <Box
        border="1px dashed"
        borderColor="primary.main"
        bgcolor="primary.50"
        borderRadius={1}
        p={4}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={4} alignItems="center">
            <AddCircleOutline />
            <Typography variant="subtitle2" color="text.secondary">
              {uploadText || "Envie um novo arquivo"} {file && "atualizado"}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={4}>
            <Input
              hidden
              ref={inputRef}
              id="icon-button-file"
              type="file"
              value={""}
              inputProps={{ "data-testid": "input-upload-file" }}
              onChange={handleChangeFile}
            />
            {!loading && !file && (
              <Button
                onClick={handleClickFile}
                disabled={disableSendButton}
                color="inherit"
                size="small"
                variant="outlined"
                endIcon={<AddCircle />}
                startIcon={
                  loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null
                }
              >
                {buttonLabel || "Enviar arquivo"}
              </Button>
            )}
          </Stack>
        </Stack>
        {/* Full informations */}
        {file && (
          <Stack spacing={2} pt={4}>
            <DisplayDefault
              leftIcon={<AddCircleOutline />}
              name={file?.name}
              onDeleteFile={onDeleteFile}
              deleteLabel="Excluir"
            />
            <FormControl>
              {showInputComment && setComment && (
                <Stack spacing={4}>
                  <Typography variant="body1" color="text.primary">
                    {additionalComment}
                  </Typography>
                  <Typography sx={{ wordBreak: "break-all" }}>
                    <RichTextEditor
                      ref={rteRef}
                      extensions={[
                        StarterKit,
                        Placeholder.configure({
                          placeholder: "Comentário adicional",
                        }),
                      ]}
                      content={comment}
                      onUpdate={({ editor }) => {
                        setComment(editor.getHTML());
                      }}
                      renderControls={() => (
                        <MenuControlsContainer>
                          <MenuDivider />
                          <MenuButtonBold />
                          <MenuButtonItalic />
                        </MenuControlsContainer>
                      )}
                    />
                  </Typography>
                </Stack>
              )}

              <Stack direction="row" justifyContent="end" pt={4}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={onClickUpload}
                  disabled={loading}
                  startIcon={
                    loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null
                  }
                >
                  Enviar arquivo
                </Button>
              </Stack>
            </FormControl>
            {loading && fileProgress && <FileProgress {...fileProgress} />}
          </Stack>
        )}
      </Box>
      {showErrorMsg && (
        <Box p={2}>
          <Typography
            variant="subtitle2"
            color="error"
            data-testid="error-message"
          >
            {errorMsg}
          </Typography>
        </Box>
      )}
    </Stack>
  );
};

export default UploadComponent;
