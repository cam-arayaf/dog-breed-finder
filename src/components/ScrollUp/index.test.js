import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ScrollUp from ".";

describe("ScrollUp component tests", () => {
  afterEach(() => cleanup());

  it("renders ScrollUp", async () => {
    render(<ScrollUp />);
    window.scrollTo = jest.fn;
    const arrow = screen.getByText("↑");
    fireEvent.click(arrow);
    expect(arrow).toBeInTheDocument();
  });
});
