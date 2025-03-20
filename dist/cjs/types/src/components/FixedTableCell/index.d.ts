import { TableCellProps } from "@mui/material";
interface IFixedTableCell {
    left: string;
    rowZIndex: number;
    bgColor?: string;
    children: React.ReactNode;
    tableCellprops?: TableCellProps;
}
declare const FixedTableCell: ({ children, rowZIndex, bgColor, left, tableCellprops, }: IFixedTableCell) => import("react/jsx-runtime").JSX.Element;
export default FixedTableCell;
