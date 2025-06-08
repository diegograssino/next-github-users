import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { default as Icon } from "./icon";

describe("Icon", () => {
  test("should render with a proper name", () => {
    const { getByTestId } = render(<Icon name="star" />);
    const icon = getByTestId("icon");

    expect(icon).toBeDefined();
  });
  test("should render correctly in sm size", () => {
    const { getByTestId } = render(<Icon name="star" />);
    const icon = getByTestId("icon");

    expect(icon).toHaveStyle({
      width: "20px",
      height: "20px",
    });
  });
  test("should render correctly in md size", () => {
    const { getByTestId } = render(<Icon size="md" name="star" />);
    const icon = getByTestId("icon");

    expect(icon).toHaveStyle({
      width: "24px",
      height: "24px",
    });
  });
  test("should render correctly in lg size", () => {
    const { getByTestId } = render(<Icon size="lg" name="star" />);
    const icon = getByTestId("icon");

    expect(icon).toHaveStyle({
      width: "32px",
      height: "32px",
    });
  });
  test("should render correctly in xl size", () => {
    const { getByTestId } = render(<Icon size="xl" name="star" />);
    const icon = getByTestId("icon");

    expect(icon).toHaveStyle({
      width: "48px",
      height: "48px",
    });
  });
});
