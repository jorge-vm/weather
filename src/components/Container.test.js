import { render, screen } from "@testing-library/react";
import Container from "./Container";

test("renders Container", () => {
  const { container } = render(<Container />);
  expect(container.firstChild).toMatchSnapshot();
});
