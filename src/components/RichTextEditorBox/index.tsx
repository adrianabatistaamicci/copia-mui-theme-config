import { Stack, Typography } from "@mui/material";
import { useRef } from "react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import {
  RichTextEditor,
  MenuButtonBold,
  MenuButtonItalic,
  MenuButtonOrderedList,
  MenuControlsContainer,
  MenuDivider,
  type RichTextEditorRef,
} from "mui-tiptap";

export interface NoteProps {
  note?: string;
  setNote?: (comment: string) => void;
  editable?: boolean;
  placeholder?: string;
  initialNote?: string;
}

const RichTextEditorBox = ({
  note,
  setNote,
  editable = true,
  placeholder = "",
  initialNote = "",
}: NoteProps) => {
  const rteRef = useRef<RichTextEditorRef>(null);

  return (
    <Stack>
      <Typography sx={{ wordBreak: "break-all" }}>
        <Stack maxHeight={283} overflow="auto">
          <RichTextEditor
            ref={rteRef}
            editable={editable}
            extensions={[
              StarterKit,
              Placeholder.configure({
                placeholder,
              }),
            ]}
            content={initialNote || note}
            onUpdate={({ editor }) => {
              setNote?.(editor.getHTML());
            }}
            renderControls={() => (
              <MenuControlsContainer>
                <MenuDivider />
                <MenuButtonBold />
                <MenuButtonItalic />
                <MenuButtonOrderedList />
              </MenuControlsContainer>
            )}
          />
        </Stack>
      </Typography>
    </Stack>
  );
};

export default RichTextEditorBox;
