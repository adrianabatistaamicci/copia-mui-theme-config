import { EditOutlined } from "@mui/icons-material";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  LinearProgress,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

interface IStepCardComponent {
  icon: JSX.Element;
  title: string;
  progress?: string;
  showProgressBar?: boolean;
  onClick: () => void;
  date?: string | null;
  chipStatus?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  isProjectDisabled?: boolean;
  toggleShowStepCardDeadlinesDialog?: (() => void) | null;
}

const StepCardComponent = ({
  icon,
  title,
  progress,
  onClick,
  date,
  chipStatus,
  selected = false,
  disabled = false,
  isProjectDisabled,
  showProgressBar = false,
  toggleShowStepCardDeadlinesDialog,
}: IStepCardComponent) => {
  const getStateColor = (type: "icon" | "progress") => {
    const defaultColor = type === "icon" ? "text.primary" : "grey.400";
    if (progress === "100") {
      return "success.main";
    }
    return selected ? "primary.main" : defaultColor;
  };

  return (
    <Tooltip title={disabled ? "Não se aplica" : ""}>
      <Card
        variant="outlined"
        onClick={disabled ? undefined : onClick}
        sx={{
          borderColor: selected ? "primary.main" : "grey.300",
          borderWidth: "1px",
          borderStyle: "solid",
          width: "100%",
          cursor: disabled ? "default" : "pointer",
          color: selected ? "primary.main" : "text.primary",
          "&:hover": {
            backgroundColor: "grey.100",
          },
          opacity: disabled ? 0.5 : 1,
          minHeight: 120,
        }}
      >
        <CardContent sx={{ p: 5, "&:last-child": { pb: 5 } }}>
          <Stack direction="row" justifyContent="space-between">
            <Box sx={{ color: getStateColor("icon") }}>{icon}</Box>
            <Typography variant="h6" fontWeight="500" color="text.secondary">
              {title}
            </Typography>
          </Stack>{" "}
          {/* Barra de progresso */}
          {showProgressBar && progress && (
            <Box mt={5}>
              <LinearProgress
                sx={({ palette }) => ({
                  mt: 1,
                  backgroundColor: palette.grey[300],
                  "& .MuiLinearProgress-barColorPrimary": {
                    backgroundColor: getStateColor("progress"),
                  },
                })}
                variant="determinate"
                value={Number(progress)}
              />
            </Box>
          )}
          <Grid container mt={5} alignItems="center">
            <Grid item xs={6}>
              {date && (
                <Stack direction="row" alignItems="center">
                  <Typography
                    variant="caption"
                    fontWeight={500}
                    color="text.disabled"
                  >
                    {date}
                  </Typography>
                  {toggleShowStepCardDeadlinesDialog && (
                    <IconButton
                      size="small"
                      disabled={isProjectDisabled}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleShowStepCardDeadlinesDialog();
                      }}
                    >
                      <EditOutlined sx={{ width: 16, height: 16 }} />
                    </IconButton>
                  )}
                </Stack>
              )}
            </Grid>{" "}
            <Grid item xs={6} display="flex" justifyContent="flex-end">
              {chipStatus && chipStatus}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Tooltip>
  );
};

export default StepCardComponent;
