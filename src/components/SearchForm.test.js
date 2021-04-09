import { render, screen, waitFor } from "@testing-library/react";
import SearchForm from "./SearchForm";
import userEvent from "@testing-library/user-event";

test("renders SearchForm", () => {
  const { container } = render(<SearchForm />);
  expect(container.firstChild).toMatchSnapshot();
});

test("rendering and submitting a basic Formik form", async () => {
  const handleSubmit = jest.fn();
  render(<SearchForm apiCall={handleSubmit} />);

  userEvent.type(
    screen.getByPlaceholderText(/Enter city name, i,e. Seattle/i),
    "Miami"
  );

  userEvent.click(screen.getByRole("button", { name: /submit/i }));

  await waitFor(() => expect(handleSubmit).toHaveBeenCalled());
});
