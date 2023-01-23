import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Checkbox from ".";

describe("Checkbox component tests", () => {
  const textToFind = "children";
  afterEach(() => cleanup());

  it("renders Checkbox", () => {
    render(
      <Checkbox checked={false} setChecked={jest.fn}>
        children
      </Checkbox>
    );

    const checkboxText = screen.getByText(textToFind);
    fireEvent.click(checkboxText);
    expect(checkboxText).toBeInTheDocument();
  });

  it("renders Checkbox with disabled", () => {
    render(
      <Checkbox checked={false} disabled setChecked={jest.fn}>
        children
      </Checkbox>
    );

    expect(screen.getByText(textToFind)).toBeInTheDocument();
  });
});
