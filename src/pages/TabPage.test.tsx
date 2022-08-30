import { render, screen, fireEvent } from "@testing-library/react";
import { TabPage } from "./TabPage";

describe("<TabPage>", () => {
  const realLocation = window.location;

  beforeEach(() => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: { assign: jest.fn() },
    });
  });

  afterEach(() => {
    window.location = realLocation;
  });

  it("should render successfully without crashing", () => {
    render(<TabPage />);

    expect(screen.queryAllByRole("tab", { name: "Tab-1" })[0]).toHaveClass(
      "active"
    );
  });

  it("should navigate to next tab via arrow right key", () => {
    render(<TabPage />);

    fireEvent.keyDown(screen.getByTestId("myTabs1-tab-0"), {
      key: "ArrowRight",
    });
    fireEvent.keyDown(screen.getByTestId("myTabs2-tab-0"), {
      key: "ArrowRight",
    });
    fireEvent.keyDown(screen.getByTestId("myTabs3-tab-0"), {
      key: "ArrowRight",
    });

    expect(screen.getByTestId("myTabs1-tab-1")).toHaveClass("active");
    expect(screen.getByTestId("myTabs2-tab-1")).toHaveClass("active");
    expect(screen.getByTestId("myTabs3-tab-1")).toHaveClass("active");
  });

  it("should navigate to prev tab via arrow left key", () => {
    render(<TabPage />);

    fireEvent.keyDown(screen.getByTestId("myTabs1-tab-0"), {
      key: "ArrowLeft",
    });
    fireEvent.keyDown(screen.getByTestId("myTabs2-tab-0"), {
      key: "ArrowLeft",
    });
    fireEvent.keyDown(screen.getByTestId("myTabs3-tab-0"), {
      key: "ArrowLeft",
    });

    expect(screen.getByTestId("myTabs1-tab-3")).toHaveClass("active");
    expect(screen.getByTestId("myTabs2-tab-3")).toHaveClass("active");
    expect(screen.getByTestId("myTabs3-tab-3")).toHaveClass("active");
  });

  it("should active tabs correctly via url params", () => {
    window.location.search = "?tab1=3&tab2=2&tab3=1";
    render(<TabPage />);

    expect(screen.getByTestId("myTabs1-tab-3")).toHaveClass("active");
    expect(screen.getByTestId("myTabs2-tab-2")).toHaveClass("active");
    expect(screen.getByTestId("myTabs3-tab-1")).toHaveClass("active");
  });
});
