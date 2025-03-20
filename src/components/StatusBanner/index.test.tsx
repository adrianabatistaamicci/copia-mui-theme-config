import { render, screen, fireEvent } from "@testing-library/react";
import StatusBanner from ".";

describe("StatusBanner", () => {
  it("should render content", () => {
    render(<StatusBanner title="Teste" content="Teste" />);
    expect(screen.getByTestId("content")).toBeInTheDocument();
  });

  it("should render status", () => {
    render(<StatusBanner title="Teste" status="Teste" />);
    expect(screen.getByTestId("status")).toBeInTheDocument();
  });

  it("should render action", () => {
    render(<StatusBanner title="Teste" onAction={() => {}} />);
    expect(screen.getByTestId("action")).toBeInTheDocument();
  });

  it("should call action", () => {
    const onAction = vi.fn();
    render(<StatusBanner title="Teste" onAction={onAction} />);
    const button = screen.getByTestId("action");
    fireEvent.click(button);
    expect(onAction).toHaveBeenCalled();
  });
});
