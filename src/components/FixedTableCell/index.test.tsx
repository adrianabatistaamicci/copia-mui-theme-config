import { fireEvent, render, screen } from "@testing-library/react";
import FixedTableCell from ".";
import { width } from "@mui/system";

describe("FixedTableCell", () => {
  it("should display comment", () => {
    render(<FixedTableCell left="0" rowZIndex={0} children={"Test"} />);
    expect(screen.getByTestId("tableCell")).toBeInTheDocument();
  });
});
