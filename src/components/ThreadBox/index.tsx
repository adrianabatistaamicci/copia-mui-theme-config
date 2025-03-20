import {
  ExpandLessOutlined,
  ExpandMoreOutlined,
  MoreVert,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Skeleton,
  Stack,
  TextField,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { useRef, useState } from "react";
import ThreadComment, { ThreadCommentProps } from "../ThreadComment";
import DisplayDefault from "../DisplayDefault";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import {
  RichTextEditor,
  MenuButtonBold,
  MenuButtonItalic,
  MenuButtonOrderedList,
  MenuControlsContainer,
  RichTextReadOnly,
  type RichTextEditorRef,
} from "mui-tiptap";

export interface ThreadBoxProps {
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
  submenu?: Array<{ label: string; onClick: () => void }>;
  threadCommentProps?: (
    comment: ThreadCommentProps
  ) => Partial<ThreadCommentProps>;
  isActive?: boolean;
}

const ThreadBox = ({
  loading,
  title,
  threadId,
  createdBy,
  sentDate,
  message,
  fileSize,
  attachmentDescription,
  attachmentUrl,
  attachmentName,
  showMessageCollapse = false,
  setComment,
  onSubmitMessage,
  onClickCollapse,
  onDownloadFile,
  showInputMessage = false,
  historyComments,
  inputMessage = "",
  submenu,
  expanded,
  handleChange,
  isActive,
  threadCommentProps,
}: ThreadBoxProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const rteRef = useRef<RichTextEditorRef>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getThreadCommentProps = (comment: ThreadCommentProps) =>
    threadCommentProps ? threadCommentProps(comment) : {};

  return (
    <Stack
      border="1px solid"
      direction="column"
      bgcolor={showInputMessage ? "grey.50" : "grey.100"}
      borderColor="grey.300"
      borderRadius={1}
      padding={4}
      marginTop={2}
      spacing={4}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="subtitle1" color="secondary.main">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="primary.main">
            {createdBy}
          </Typography>
          <Typography variant="caption" color="secondary.main">
            {sentDate}
          </Typography>
        </Stack>
        {submenu && submenu.length > 0 && (
          <>
            <IconButton
              aria-label="submenu-trigger"
              onClick={handleClick}
              sx={{ p: 0 }}
            >
              <MoreVert sx={{ width: 24, height: 24, color: "text.primary" }} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              data-testid="comment-submenu"
            >
              {submenu.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={item.onClick}
                  sx={{ minWidth: 140 }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Stack>
      {message && (
        <Stack>
          <Typography variant="body1" sx={{ wordBreak: "break-all" }}>
            <RichTextReadOnly
              content={message.toString()}
              extensions={[StarterKit]}
            />
          </Typography>
        </Stack>
      )}
      {attachmentDescription && (
        <Typography variant="subtitle2" color="secondary.main">
          {attachmentDescription}
        </Typography>
      )}
      <DisplayDefault
        fileSize={fileSize}
        borderColor="grey.300"
        name={attachmentName}
        file={attachmentUrl}
        downloadLabel="Download"
        onDownloadFile={onDownloadFile}
      />
      <Divider />
      <Stack alignSelf="flex-end" maxWidth="80%" width="100%">
        <Stack paddingBottom={4}>
          {showInputMessage && (
            <Stack spacing={2}>
              <Typography sx={{ wordBreak: "break-all" }}>
                <RichTextEditor
                  ref={rteRef}
                  extensions={[
                    StarterKit,
                    Placeholder.configure({
                      placeholder: "Escreva seu comentário...",
                    }),
                  ]}
                  content={inputMessage}
                  onUpdate={({ editor }) => {
                    if (setComment) setComment(editor.getHTML());
                  }}
                  renderControls={() => (
                    <MenuControlsContainer>
                      <MenuButtonBold />
                      <MenuButtonItalic />
                    </MenuControlsContainer>
                  )}
                />
              </Typography>
              <Box alignSelf="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  disabled={!inputMessage}
                  onClick={() => {
                    onSubmitMessage && onSubmitMessage(inputMessage);
                    if (rteRef.current?.editor) {
                      rteRef.current.editor.commands.clearContent(); // limpa o conteúdo do editor
                    }
                  }}
                >
                  Enviar
                </Button>
              </Box>
            </Stack>
          )}
        </Stack>

        <Stack spacing={4} data-testid="comment-stack">
          <Stack spacing={4} alignSelf="flex-end">
            {(showMessageCollapse || isActive) && (
              <Button
                variant="text"
                color="secondary"
                endIcon={
                  expanded === threadId ? (
                    <ExpandLessOutlined />
                  ) : (
                    <ExpandMoreOutlined />
                  )
                }
                onClick={() => {
                  handleChange(threadId);
                  onClickCollapse && onClickCollapse(threadId);
                }}
                data-testid="show-comments"
              >
                Visualizar histórico de comentários
              </Button>
            )}
          </Stack>
          <Stack>
            {loading ? (
              <Stack spacing={4}>
                <Skeleton variant="rectangular" height={100} />
                <Skeleton variant="rectangular" height={100} />
              </Stack>
            ) : (
              <Collapse in={expanded === threadId}>
                <Stack spacing={4} data-testid="collapse-comment-stack">
                  {expanded === threadId && historyComments ? (
                    historyComments?.map((comment) => (
                      <>
                        {!showMessageCollapse ? (
                          <ThreadComment
                            key={comment.id}
                            {...comment}
                            {...getThreadCommentProps(comment)}
                          />
                        ) : (
                          <ThreadComment key={comment.id} {...comment} />
                        )}
                      </>
                    ))
                  ) : (
                    <Stack alignItems="flex-end" paddingRight={4}>
                      <Typography variant="subtitle1" color="text.secondary">
                        Nenhum comentário adicionado
                      </Typography>
                    </Stack>
                  )}
                </Stack>
              </Collapse>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ThreadBox;
