import { render, screen, fireEvent } from "@testing-library/react";
import ThreadBox from ".";

describe("ThreadBox", () => {
  it("should display submenu", () => {
    render(
      <ThreadBox
        threadId={1}
        submenu={[
          { label: "Teste", onClick: () => {} },
          { label: "Teste2", onClick: () => {} },
        ]}
        handleChange={() => {}}
      />
    );
    const submenuButton = screen.getByLabelText("submenu-trigger");
    fireEvent.click(submenuButton);
    expect(screen.getByTestId("comment-submenu")).toBeInTheDocument();
  });

  it("should display comments list", () => {
    render(
      <ThreadBox
        threadId={1}
        historyComments={[
          { id: 1, comment: "Teste" },
          { id: 2, comment: "Teste2" },
        ]}
        handleChange={() => {}}
      />
    );
    const commentStack = screen.getByTestId("comment-stack");
    expect(commentStack.children).toHaveLength(2);
  });

  it("should display comments list on collapse", () => {
    render(
      <ThreadBox
        threadId={1}
        showMessageCollapse
        historyComments={[{ id: 1, comment: "Teste" }]}
        handleChange={() => {}}
      />
    );
    const showCommentsButton = screen.getByTestId("show-comments");
    fireEvent.click(showCommentsButton);

    const collapseCommentStack = screen.getByTestId("collapse-comment-stack");
    expect(collapseCommentStack.children).toHaveLength(1);
  });
});
