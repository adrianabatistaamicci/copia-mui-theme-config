import "@mui/material/styles";
export interface ColorProps {
    readonly [key: string]: string;
}
declare module "@mui/material/styles" {
    interface PaletteColor {
        50?: string;
        100?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        800?: string;
        850?: string;
        900?: string;
    }
}
