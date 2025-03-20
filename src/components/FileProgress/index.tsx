import { Box, LinearProgress, Typography } from "@mui/material";

const formatBytes = (bytes: number | null, decimals: number = 1) => {
  if (!bytes || !+bytes) return "0 B";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${(bytes / Math.pow(k, i)).toFixed(dm)} ${sizes[i]}`;
};

export interface FileProgressProps {
  progress: number;
  total: number | null;
  transferred: number | null;
}

const FileProgress = ({ progress, total, transferred }: FileProgressProps) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <Box sx={{ width: "100%", mr: 1 }}>
      <LinearProgress
        variant={total ? "determinate" : "indeterminate"}
        value={progress}
      />
    </Box>
    <Box sx={{ minWidth: 35 }}>
      <Typography
        variant="body2"
        color="text.secondary"
        data-testid="progress-label"
      >
        {total ? `${Math.round(progress)}%` : formatBytes(transferred)}
      </Typography>
    </Box>
  </Box>
);

export default FileProgress;
