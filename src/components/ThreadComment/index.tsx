import { useState } from "react";
import { Stack, Typography, Menu, MenuItem, IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { RichTextReadOnly } from "mui-tiptap";
import StarterKit from "@tiptap/starter-kit";

export interface ThreadCommentProps {
  id: number;
  sentDate?: string;
  messageBy?: string;
  comment?: string;
  submenu?: Array<{ label: string; onClick: () => void }>;
}

const ThreadComment = ({
  sentDate,
  messageBy,
  comment,
  submenu,
}: ThreadCommentProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      border="1px solid"
      borderColor="grey.300"
      bgcolor="white"
      borderRadius={1}
      padding={4}
      spacing={2}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="subtitle1">Mensagem de</Typography>
          <Typography variant="subtitle1" color="primary.main">
            {messageBy}
          </Typography>
          <Typography variant="caption">{sentDate}</Typography>
        </Stack>
        {submenu && submenu.length > 0 && (
          <>
            <IconButton
              onClick={handleClick}
              sx={{ p: 0 }}
              aria-label="submenu-trigger"
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
      {comment && (
        <Typography variant="body2" data-testid="comment" sx={{ wordBreak: "break-all" }}>
          <RichTextReadOnly content={comment} extensions={[StarterKit]} />
        </Typography>
      )}
    </Stack>
  );
};

export default ThreadComment;
