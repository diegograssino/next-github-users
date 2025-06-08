import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Anchor from "./anchor";

describe("Container", () => {
  test("should render a children", () => {
    const { getByText } = render(<Anchor href="./test">Test</Anchor>);
    const text = getByText("Test");

    expect(text).toBeInTheDocument();
  });
});
