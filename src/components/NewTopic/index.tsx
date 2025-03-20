import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  Typography,
  CircularProgress,
} from '@mui/material';
import { AddCircleOutline, AddCircle } from '@mui/icons-material';
import { useState, useRef, useCallback } from 'react';
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

const NewTopic = ({
  comment,
  acceptedTypes = null,
  setComment,
  onClickSaveNewTopic,
  disableSendButton = false,
  loading = false,
  buttonLabel,
  uploadText,
}: NewTopicProps) => {
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const inputRef = useRef(null);
  const rteRef = useRef<RichTextEditorRef>(null);
  const [openNewTopic, setOpenNewTopic] = useState(false);

  const handleSendClick = useCallback(() => {
    setOpenNewTopic(true); 
  }, []);
  
  const handleSaveClick = useCallback(() => {
    if (onClickSaveNewTopic) {
      onClickSaveNewTopic(); 
    }
    setOpenNewTopic(false); 
  }, [onClickSaveNewTopic]);
 
  return (
    <Stack>
      <Box
        border="1px dashed"
        borderColor="primary.main"
        bgcolor="primary.50"
        borderRadius={1}
        p={4}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between">
          <Stack direction="row" spacing={4} alignItems="center">
            <AddCircleOutline />
            <Typography variant="subtitle2" color="text.secondary">
              {uploadText || 'Inicie novo tópico '}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={4}>
            {!openNewTopic && (
              <Button
                onClick={handleSendClick}
                disabled={disableSendButton}
                color="inherit"
                size="small"
                variant="outlined"
                endIcon={<AddCircle />}
                startIcon={
                  loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null
                }>
                {buttonLabel || 'Inicie tópico'}
              </Button>
            )}
          </Stack>
        </Stack>
        {openNewTopic && setComment &&
        <Stack mt={4}>
          <Typography sx={{ wordBreak: "break-all" }}>
            <Typography variant="body1" color="text.secondary">
            Adicione um comentário
            </Typography>
          <Stack mt={4} maxHeight={283} overflow="auto">
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
            </Stack>
            <Stack direction="row" justifyContent="end" pt={4}>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={handleSaveClick}
                disabled={loading}
                startIcon={
                  loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null
                }>
                Enviar
              </Button>
            </Stack>
          </Typography>
        </Stack>
       }        
      </Box>      
    </Stack>
  );
};

export default NewTopic;
