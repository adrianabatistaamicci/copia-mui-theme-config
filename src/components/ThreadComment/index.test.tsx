import { fireEvent, render, screen } from "@testing-library/react";
import ThreadComment from ".";

describe("ThreadComment", () => {
  it("should display comment", () => {
    render(<ThreadComment id={1} comment="Teste" />);
    expect(screen.getByTestId("comment")).toBeInTheDocument();
  });

  it("should display submenu", () => {
    render(
      <ThreadComment
        id={1}
        comment="Teste"
        submenu={[
          { label: "Teste", onClick: () => {} },
          { label: "Teste2", onClick: () => {} },
        ]}
      />
    );
    const submenuButton = screen.getByLabelText("submenu-trigger");
    fireEvent.click(submenuButton);
    expect(screen.getByTestId("comment-submenu")).toBeInTheDocument();
  });
});
