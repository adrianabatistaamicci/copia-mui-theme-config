// src/components/Header.test.tsx
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from ".";
import FixedTableCell from "../FixedTableCell";

describe("Header component", () => {
  it("should render breadcrumbs", () => {
    const breadcrumbs = [
      { title: "Root", route: "/" },
      { title: "Test", route: "/test" },
    ];
    render(
      <MemoryRouter>
        <Header
          title="Test Title"
          breadcrumbs={breadcrumbs}
          maxBreadcrumbs={4}
        />
      </MemoryRouter>
    );
    expect(screen.getByTestId("header-breadcrumbs")).toContainElement(
      screen.getByLabelText("header-breadcrumb-Root")
    );
    expect(screen.getByTestId("header-breadcrumbs")).toContainElement(
      screen.getByLabelText("header-breadcrumb-Test")
    );
  });

  it("should render loading state", () => {
    render(
      <MemoryRouter>
        <Header title="Test Title" loading />
      </MemoryRouter>
    );
    expect(screen.getByTestId("header-skeleton")).toBeInTheDocument();
    expect(screen.queryByTestId("header-title")).toBeNull();
  });

  it("should render only maxBreadcrumbs", () => {
    const breadcrumbs = [{ title: "Root", route: "/" }];
    render(
      <MemoryRouter>
        <Header
          title="Test Title"
          breadcrumbs={breadcrumbs}
          maxBreadcrumbs={2}
        />
      </MemoryRouter>
    );
    expect(screen.queryByLabelText("header-breadcrumb-Root")).toBeNull();
  });
});
