import { cleanup, render, screen } from "@testing-library/react";
import Header from ".";

describe("Header component tests", () => {
  const title = "Dog Breed Finder";
  afterEach(() => cleanup());

  it("renders Header", async () => {
    render(<Header />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
