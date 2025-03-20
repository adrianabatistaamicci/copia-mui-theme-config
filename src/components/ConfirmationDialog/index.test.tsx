import { render, screen, fireEvent } from "@testing-library/react";
import ConfirmationDialog from ".";

describe("ConfirmationDialog", () => {
  it("should call onConfirm when confirm button is clicked", () => {
    const onConfirm = vi.fn();
    render(
      <ConfirmationDialog
        open
        title="Teste"
        description="Teste"
        onConfirm={onConfirm}
        onClose={() => {}}
      />
    );
    const button = screen.getByTestId("confirm-button");
    fireEvent.click(button);
    expect(onConfirm).toHaveBeenCalled();
  });

  it("should close when cancel button is clicked", () => {
    const onClose = vi.fn();
    render(
      <ConfirmationDialog
        open
        title="Teste"
        description="Teste"
        onConfirm={() => {}}
        onClose={onClose}
      />
    );
    const button = screen.getByTestId("cancel-button");
    fireEvent.click(button);
    expect(onClose).toHaveBeenCalled();
  });
});
