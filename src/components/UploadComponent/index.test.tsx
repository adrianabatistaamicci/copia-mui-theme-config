import user from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";
import UploadComponent from ".";

describe("UploadComponent", () => {
  it("should set a file correctly", () => {
    const fileFn = vi.fn();
    render(
      <UploadComponent
        setFile={fileFn}
        onClickUpload={() => {}}
        onDeleteFile={() => {}}
      />
    );
    const fileInput = screen.getByTestId(
      "input-upload-file"
    ) as HTMLInputElement;
    fireEvent.change(fileInput, {
      target: { files: [new File(["test"], "test.pdf", { type: "pdf" })] },
    });
    expect(fileInput.files).toHaveLength(1);
    expect(fileFn).toHaveBeenCalledOnce();
  });

  it("should display an error message when a file with an invalid type is selected", () => {
    render(
      <UploadComponent
        setFile={() => {}}
        onClickUpload={() => {}}
        onDeleteFile={() => {}}
        acceptedTypes={["image/png", "image/jpeg"]}
      />
    );
    const fileInput = screen.getByTestId(
      "input-upload-file"
    ) as HTMLInputElement;
    const invalidFile = new File(["invalid"], "invalid.txt", {
      type: "text/plain",
    });
    fireEvent.change(fileInput, { target: { files: [invalidFile] } });
    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });

  it("should not display an error message when a file with a valid type is selected", () => {
    render(
      <UploadComponent
        setFile={() => {}}
        onClickUpload={() => {}}
        onDeleteFile={() => {}}
        acceptedTypes={["image/png", "image/jpeg"]}
      />
    );
    const fileInput = screen.getByTestId(
      "input-upload-file"
    ) as HTMLInputElement;
    const validFile = new File(["valid"], "valid.png", { type: "image/png" });
    fireEvent.change(fileInput, { target: { files: [validFile] } });
    expect(screen.queryByTestId("error-message")).not.toBeInTheDocument();
  });

  it("should show file progress when available", () => {
    render(
      <UploadComponent
        loading
        setFile={() => {}}
        onClickUpload={() => {}}
        onDeleteFile={() => {}}
        file={new File(["valid"], "valid.png", { type: "image/png" })}
        fileProgress={{ progress: 10, total: 100, transferred: 10 }}
      />
    );
    expect(screen.getByText("10%")).toBeInTheDocument();
  });
});
