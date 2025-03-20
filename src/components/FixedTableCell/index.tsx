import { TableCell, TableCellProps } from "@mui/material";
interface IFixedTableCell {
  left: string;
  rowZIndex: number;
  bgColor?: string;
  children: React.ReactNode;
  tableCellprops?: TableCellProps;
}
const FixedTableCell = ({
  children,
  rowZIndex = 0,
  bgColor = "white",
  left = "0",
  tableCellprops,
}: IFixedTableCell) => {
  return (
    <TableCell
      // TableCellProps => width, height, align, padding....
      {...tableCellprops}
      data-testid="tableCell"
      sx={{
        position: "sticky",
        left: left,
        zIndex: 100 + rowZIndex,
        backgroundColor: bgColor,
      }}
    >
      {children}
    </TableCell>
  );
};

export default FixedTableCell;
