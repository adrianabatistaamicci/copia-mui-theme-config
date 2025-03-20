import { ReactElement, ReactNode } from "react";
import { Typography, Button, Chip, Stack, ChipOwnProps } from "@mui/material";
import { RemoveRedEyeOutlined, SvgIconComponent } from "@mui/icons-material";

interface IStatusBannerProps {
  title: string;
  content?: ReactNode;
  status?: string;
  statusColor?: ChipOwnProps["color"];
  actionLabel?: string;
  actionIcon?: ReactElement<SvgIconComponent>;
  onAction?: () => void;
}

const StatusBanner = ({
  title,
  content,
  status,
  statusColor = "success",
  actionLabel = "Visualizar",
  actionIcon = <RemoveRedEyeOutlined />,
  onAction,
}: IStatusBannerProps) => {
  return (
    <Stack
      p={4}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      border="1px solid"
      borderRadius={1}
      borderColor="grey.300"
      bgcolor="grey.50"
    >
      <Stack spacing={1}>
        <Stack spacing={3} direction="row" alignItems="center">
          <Typography variant="subtitle1" data-testid="title">
            {title}
          </Typography>
          {status && (
            <Chip
              size="small"
              label={status}
              color={statusColor}
              data-testid="status"
            />
          )}
        </Stack>
        {content && (
          <Typography
            variant="caption"
            color="text.disabled"
            data-testid="content"
          >
            {content}
          </Typography>
        )}
      </Stack>
      {onAction && (
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={onAction}
          endIcon={actionIcon}
          data-testid="action"
        >
          {actionLabel}
        </Button>
      )}
    </Stack>
  );
};

export default StatusBanner;
