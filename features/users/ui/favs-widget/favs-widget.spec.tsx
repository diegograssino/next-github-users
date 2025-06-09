import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { default as CardWidget } from "./favs-widget";

describe("FavsWidget", () => {
  test("should render", () => {
    const { getByTestId } = render(<CardWidget id={1} />);
    const cardWidget = getByTestId("card-widget");

    expect(cardWidget).toBeDefined();
  });
});
