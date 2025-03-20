import { alpha, Theme } from "@mui/material/styles";

export default function componentStyleOverrides(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        textPrimary: {
          color: theme.palette.grey[900],
          "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: "transparent",
          },
          padding: "0 !important",
        },
        outlinedInherit: {
          color: theme.palette.grey[900],
          borderColor: alpha(theme.palette.grey[900], 0.23),
        },
      },
    },

    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },

    MuiDialog: {
      defaultProps: {
        disableEnforceFocus: true,
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(6),
        },
      },
    },

    MuiBreadcrumbs: {
      defaultProps: {
        separator: "›",
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:not(.MuiTableRow-head)": {
            "&:last-child td, &:last-child th": {
              border: 0,
            },
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.main,
        },
        colorSecondary: {
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.secondary.main,
        },
        colorSuccess: {
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.main,
        },
        colorWarning: {
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.main,
        },
        colorError: {
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.main,
        },
        colorInfo: {
          backgroundColor: theme.palette.info.light,
          color: theme.palette.info.main,
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success[900],
        },
        standardError: {
          backgroundColor: theme.palette.error[200],
          color: theme.palette.error[900],
        },
        standardWarning: {
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning[900],
        },
        standardInfo: {
          backgroundColor: theme.palette.info[100],
          color: theme.palette.info[900],
        },
        outlinedSuccess: {
          borderColor: theme.palette.success.main,
          color: theme.palette.success[900],
        },
        outlinedError: {
          borderColor: theme.palette.error.main,
          color: theme.palette.error[900],
        },
        outlinedWarning: {
          borderColor: theme.palette.warning.main,
          color: theme.palette.warning[900],
        },
        outlinedInfo: {
          borderColor: theme.palette.info.main,
          color: theme.palette.info[900],
        },
        filledSuccess: {
          backgroundColor: theme.palette.success.main,
          color: theme.palette.success.contrastText,
        },
        filledError: {
          backgroundColor: theme.palette.error.main,
          color: theme.palette.error.contrastText,
        },
        filledWarning: {
          backgroundColor: theme.palette.warning.main,
          color: theme.palette.warning.contrastText,
        },
        filledInfo: {
          backgroundColor: theme.palette.info.main,
          color: theme.palette.info.contrastText,
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: theme.palette.secondary.main,
          "&:hover": {
            color: theme.palette.secondary.dark,
          },
        },
        colorPrimary: {
          color: theme.palette.secondary.main,
          "&:hover": {
            color: theme.palette.secondary.dark,
          },
        },
        colorInherit: {
          color: theme.palette.text.primary,
          "&:hover": {
            color: theme.palette.text.primary,
          },
        },
      },
    },
  };
}
