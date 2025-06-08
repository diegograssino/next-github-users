import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { default as Typography } from "./typography";

describe("Typography", () => {
  test("should render", () => {
    const { getByText } = render(<Typography>Test</Typography>);
    const typography = getByText("Test");

    expect(typography).toBeDefined();
  });
});
