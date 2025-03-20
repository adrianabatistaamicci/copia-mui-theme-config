import React from "react";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
  Dialog,
  DialogContent,
  FormControl,
  Stack,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { StackProps } from "@mui/system";
import { Close } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface IFullPageDialog {
  open: boolean;
  bgColor?: StackProps["bgcolor"];
  title?: string;
  actionButton?: React.ReactNode;
  children?: React.ReactNode;
  handleClose?: () => void;
  handleSubmit?: () => void;
}

const FullPageDialog = ({
  open,
  title,
  actionButton,
  children,
  handleClose,
  handleSubmit,
  bgColor,
}: IFullPageDialog) => {
  return (
    <Dialog open={open} maxWidth="lg" fullScreen>
      <AppBar sx={{ position: "relative" }} color="transparent">
        <Stack paddingLeft={2}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {title}
            </Typography>
            {actionButton && <>{actionButton}</>}
          </Toolbar>
        </Stack>
      </AppBar>
      <DialogContent>
        {children && (
          <Stack width="100%" bgcolor={bgColor}>
            {children}
          </Stack>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FullPageDialog;
