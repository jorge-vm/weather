import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders weather app paragraph", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});
