import { render, screen } from "@testing-library/react";
import FileProgress from ".";

describe("FileProgress", () => {
  it("should display progress", () => {
    render(<FileProgress progress={10} total={100} transferred={10} />);
    expect(screen.getByText("10%")).toBeInTheDocument();
  });

  it("should display transferred when total is null", () => {
    render(<FileProgress progress={10} total={null} transferred={1024} />);
    expect(screen.getByText("1.0 KiB")).toBeInTheDocument();
  });
});
