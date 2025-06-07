import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { default as Icon } from "./icon";

describe("Icon", () => {
  test("should render with a proper name", () => {
    const { getByTestId } = render(<Icon name="star" />);
    const icon = getByTestId("icon");

    expect(icon).toBeDefined();
  });
});
