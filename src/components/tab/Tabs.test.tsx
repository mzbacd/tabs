import { Tabs } from "./Tabs";
import { render, screen, fireEvent } from "@testing-library/react";

const tabsMock = [
  { tabName: "Tab-1", contentTitle: "Tab-1-content", id: "1" },
  { tabName: "Tab-2", contentTitle: "Tab-2-content", id: "2" },
  { tabName: "Tab-3", contentTitle: "Tab-3-content", id: "3" },
  { tabName: "Tab-4", contentTitle: "Tab-4-content", id: "4" },
];

describe("<Tabs>", () => {
  it("should render tabs without crashing", () => {
    const ariaName = "myTabs";
    render(<Tabs id={ariaName} tabs={tabsMock} />);

    expect(screen.getByRole("tab", { name: "Tab-1" })).toHaveClass("active");
    expect(screen.getByRole("tabpanel", { name: "Tab-1" })).toHaveClass(
      "tabPanelBoxActive"
    );
  });

  it.each([
    {
      defaultIdx: 0,
      expectedIdx: 1,
    },
    {
      defaultIdx: 3,
      expectedIdx: 0,
    },
  ])(
    "should go to next tab correctly via pressing arrow right key",
    ({ defaultIdx, expectedIdx }) => {
      const onChangeMock = jest.fn();
      render(
        <Tabs
          id="myTabs"
          tabs={tabsMock}
          defaultIdx={defaultIdx}
          onChange={onChangeMock}
        />
      );

      fireEvent.keyDown(
        screen.getByRole("tab", { name: `Tab-${defaultIdx + 1}` }),
        { key: "ArrowRight" }
      );

      expect(
        screen.getByRole("tab", { name: `Tab-${expectedIdx + 1}` })
      ).toHaveClass("active");
      expect(
        screen.getByRole("tabpanel", { name: `Tab-${expectedIdx + 1}` })
      ).toHaveClass("tabPanelBoxActive");
      expect(onChangeMock).toBeCalled();
    }
  );

  it.each([
    {
      defaultIdx: 0,
      expectedIdx: 3,
    },
    {
      defaultIdx: 3,
      expectedIdx: 2,
    },
  ])(
    "should go to previous tab correctly via pressing arrow left key",
    ({ defaultIdx, expectedIdx }) => {
      const onChangeMock = jest.fn();

      render(
        <Tabs
          id="myTabs"
          tabs={tabsMock}
          defaultIdx={defaultIdx}
          onChange={onChangeMock}
        />
      );

      fireEvent.keyDown(
        screen.getByRole("tab", { name: `Tab-${defaultIdx + 1}` }),
        { key: "ArrowLeft" }
      );

      expect(
        screen.getByRole("tab", { name: `Tab-${expectedIdx + 1}` })
      ).toHaveClass("active");
      expect(
        screen.getByRole("tabpanel", { name: `Tab-${expectedIdx + 1}` })
      ).toHaveClass("tabPanelBoxActive");
      expect(onChangeMock).toBeCalled();
    }
  );

  it.each([
    {
      defaultIdx: 2,
      expectedIdx: 0,
      key: "Home",
    },
    {
      defaultIdx: 2,
      expectedIdx: 3,
      key: "End",
    },
  ])(
    "should go to first/last tab correctly via pressing home/end key",
    ({ defaultIdx, expectedIdx, key }) => {
      const onChangeMock = jest.fn();

      render(
        <Tabs
          id="myTabs"
          tabs={tabsMock}
          defaultIdx={defaultIdx}
          onChange={onChangeMock}
        />
      );

      fireEvent.keyDown(
        screen.getByRole("tab", { name: `Tab-${defaultIdx + 1}` }),
        { key }
      );

      expect(
        screen.getByRole("tab", { name: `Tab-${expectedIdx + 1}` })
      ).toHaveClass("active");
      expect(
        screen.getByRole("tabpanel", { name: `Tab-${expectedIdx + 1}` })
      ).toHaveClass("tabPanelBoxActive");
      expect(onChangeMock).toBeCalled();
    }
  );

  it.each([
    {
      expectedIdx: 1,
    },
    {
      expectedIdx: 2,
    },
    {
      expectedIdx: 3,
    },
  ])("should go to tab correctly via click", ({ expectedIdx }) => {
    const onChangeMock = jest.fn();

    render(<Tabs id="myTabs" tabs={tabsMock} onChange={onChangeMock} />);

    fireEvent.click(
      screen.getByRole("tab", { name: `Tab-${expectedIdx + 1}` })
    );

    expect(
      screen.getByRole("tab", { name: `Tab-${expectedIdx + 1}` })
    ).toHaveClass("active");
    expect(
      screen.getByRole("tabpanel", { name: `Tab-${expectedIdx + 1}` })
    ).toHaveClass("tabPanelBoxActive");
    expect(onChangeMock).toBeCalled();
  });
});
