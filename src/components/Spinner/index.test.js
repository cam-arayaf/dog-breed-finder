import { cleanup, render } from "@testing-library/react";
import Spinner from ".";

describe("Spinner component tests", () => {
  afterEach(() => cleanup());

  it("renders Spinner", async () => {
    render(<Spinner />);
  });

  it("renders Spinner with little", async () => {
    render(<Spinner little />);
  });
});
