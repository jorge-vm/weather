import { render } from "@testing-library/react";
import ResultsCard from "./ResultsCard";

test("renders ResultsCard", () => {
  const weather = { temp: 90, humidity: 45, temp_max: 43, temp_min: 45 };
  const city = "Miami";

  const { container } = render(<ResultsCard weather={weather} city={city} />);
  expect(container.firstChild).toMatchSnapshot();
});
