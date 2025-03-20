import { Theme } from "@mui/material/styles";
export default function componentStyleOverrides(theme: Theme): {
    MuiButton: {
        styleOverrides: {
            textPrimary: {
                color: string;
                "&:hover": {
                    color: string;
                    backgroundColor: string;
                };
                padding: string;
            };
            outlinedInherit: {
                color: string;
                borderColor: string;
            };
        };
    };
    MuiPaper: {
        defaultProps: {
            elevation: number;
        };
    };
    MuiDialog: {
        defaultProps: {
            disableEnforceFocus: boolean;
        };
    };
    MuiCardContent: {
        styleOverrides: {
            root: {
                padding: string;
            };
        };
    };
    MuiBreadcrumbs: {
        defaultProps: {
            separator: string;
        };
    };
    MuiTableRow: {
        styleOverrides: {
            root: {
                "&:not(.MuiTableRow-head)": {
                    "&:last-child td, &:last-child th": {
                        border: number;
                    };
                };
            };
        };
    };
    MuiChip: {
        styleOverrides: {
            colorPrimary: {
                backgroundColor: string;
                color: string;
            };
            colorSecondary: {
                backgroundColor: string;
                color: string;
            };
            colorSuccess: {
                backgroundColor: string;
                color: string;
            };
            colorWarning: {
                backgroundColor: string;
                color: string;
            };
            colorError: {
                backgroundColor: string;
                color: string;
            };
            colorInfo: {
                backgroundColor: string;
                color: string;
            };
        };
    };
    MuiAlert: {
        styleOverrides: {
            standardSuccess: {
                backgroundColor: string;
                color: string | undefined;
            };
            standardError: {
                backgroundColor: string | undefined;
                color: string | undefined;
            };
            standardWarning: {
                backgroundColor: string;
                color: string | undefined;
            };
            standardInfo: {
                backgroundColor: string | undefined;
                color: string | undefined;
            };
            outlinedSuccess: {
                borderColor: string;
                color: string | undefined;
            };
            outlinedError: {
                borderColor: string;
                color: string | undefined;
            };
            outlinedWarning: {
                borderColor: string;
                color: string | undefined;
            };
            outlinedInfo: {
                borderColor: string;
                color: string | undefined;
            };
            filledSuccess: {
                backgroundColor: string;
                color: string;
            };
            filledError: {
                backgroundColor: string;
                color: string;
            };
            filledWarning: {
                backgroundColor: string;
                color: string;
            };
            filledInfo: {
                backgroundColor: string;
                color: string;
            };
        };
    };
    MuiLink: {
        styleOverrides: {
            root: {
                color: string;
                "&:hover": {
                    color: string;
                };
            };
            colorPrimary: {
                color: string;
                "&:hover": {
                    color: string;
                };
            };
            colorInherit: {
                color: string;
                "&:hover": {
                    color: string;
                };
            };
        };
    };
};
