import { render, screen, fireEvent } from "@testing-library/react";
import DisplayDefault from ".";

describe("DisplayDefault", () => {
  it("should render placeholder text when no name is given", () => {
    render(<DisplayDefault />);
    expect(screen.getByText("Selecione um arquivo")).toBeInTheDocument();
  });

  it("should render deleteLabel text when onDeleteFile is given", () => {
    render(<DisplayDefault deleteLabel="Excluir" onDeleteFile={() => {}} />);
    expect(screen.getByText("Excluir")).toBeInTheDocument();
    expect(screen.queryByText("Download")).toBeNull();
  });

  it("should render downloadLabel text when onDownloadFile is given", () => {
    render(
      <DisplayDefault downloadLabel="Download" onDownloadFile={() => {}} />
    );
    expect(screen.getByText("Download")).toBeInTheDocument();
    expect(screen.queryByText("Excluir")).toBeNull();
  });

  it('should download file when "Download" is clicked', () => {
    global.URL.createObjectURL = vi.fn();
    const onDownloadFile = vi.fn();

    const mockFile = new File(
      [new Blob(["testing"], { type: "application/pdf" })],
      "test.pdf",
      { type: "application/pdf" }
    );

    render(<DisplayDefault file={mockFile} onDownloadFile={onDownloadFile} />);

    const button = screen.getByText("Download");
    fireEvent.click(button);

    expect(global.URL.createObjectURL).toHaveBeenCalledOnce();
    expect(onDownloadFile).toHaveBeenCalledOnce();
  });
});
