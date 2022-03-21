import { Primary } from "./Button.stories";
import { render, screen, fireEvent } from "@testing-library/react";

test("test1", () => {
  const { queryByText } = render(<Primary {...Primary.args} />);
  const button = queryByText("Click Me");
  expect(screen.getByRole("button")).toHaveTextContent(/Click Me/i);
});

test("test2", () => {
  const { queryByText } = render(<Primary {...Primary.args} />);
  const button = queryByText("Click Me");
  fireEvent.click(button);
  expect(screen.getByRole("button")).toHaveTextContent(/Click Me/i);
});

test("test3", () => {
  const { queryByText } = render(<Primary {...Primary.args} />);
  const button = queryByText("Click Me");
  fireEvent.click(button);
  fireEvent.click(button);
  expect(screen.getByRole("button")).toHaveTextContent(/Thank You/i);
});

test("test4", () => {
  const { queryByText } = render(<Primary {...Primary.args} />);
  const button = queryByText("Click Me");
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  expect(screen.getByRole("button")).toHaveTextContent(/Click Me/i);
});
