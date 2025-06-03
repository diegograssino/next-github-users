import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { default as Header } from "./header";

describe("Navbar", () => {
  test("should render", () => {
    const { getByTestId } = render(<Header />);
    const header = getByTestId("header");

    expect(header).toBeDefined();
  });
});
