import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export type ConfirmationDialogProps = {
  open: boolean;
  title: string;
  description: string;
  loading?: boolean;
  cancelText?: string;
  confirmText?: string;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmationDialog = ({
  open,
  title,
  description,
  loading,
  cancelText = "Não",
  confirmText = "Sim",
  onClose,
  onConfirm,
}: ConfirmationDialogProps) => {
  return (
    <Dialog
      disableEscapeKeyDown
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle variant="h6" py={4} px={6}>
        {title}
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body2">{description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          size="medium"
          color="secondary"
          onClick={onClose}
          data-testid="cancel-button"
        >
          {cancelText}
        </Button>
        <Button
          type="submit"
          variant="contained"
          size="medium"
          disabled={loading}
          onClick={() => onConfirm()}
          startIcon={
            loading ? (
              <CircularProgress
                color="inherit"
                size={20}
                data-testid="loading"
              />
            ) : null
          }
          data-testid="confirm-button"
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
