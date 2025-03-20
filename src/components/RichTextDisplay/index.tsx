import { Stack, Typography } from "@mui/material";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";

import { RichTextReadOnly } from "mui-tiptap";

export interface RichTextNoteProps {
  note?: string;
}

const RichTextDisplay = ({ note }: RichTextNoteProps) => {
  return (
    <Stack>
      <Typography sx={{ wordBreak: "break-all" }}>
        <Stack maxHeight={283} overflow="auto">
          <RichTextReadOnly
            extensions={[StarterKit, Placeholder, Underline]}
            content={note}
          />
        </Stack>
      </Typography>
    </Stack>
  );
};

export default RichTextDisplay;
