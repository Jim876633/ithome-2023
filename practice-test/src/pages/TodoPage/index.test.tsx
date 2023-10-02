import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { TodoPage } from "./index";

describe("TodoPage", () => {
  it("should render the input and add button", () => {
    render(
      <Provider store={store}>
        <TodoPage />
      </Provider>
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();

    const addButtonElement = screen.getByRole("button", { name: /add/i });
    expect(addButtonElement).toBeInTheDocument();
  });

  it("should add a todo when the add button is clicked", () => {
    render(
      <Provider store={store}>
        <TodoPage />
      </Provider>
    );

    const inputElement = screen.getByRole("textbox");
    const addButtonElement = screen.getByRole("button", { name: /add/i });

    fireEvent.change(inputElement, { target: { value: "Test Todo" } });
    fireEvent.click(addButtonElement);

    const todoElement = screen.getByText("Test Todo");
    expect(todoElement).toBeInTheDocument();
  });

  it("should toggle a todo when clicked", () => {
    render(
      <Provider store={store}>
        <TodoPage />
      </Provider>
    );

    const todoElement = screen.getByText("Test Todo");
    fireEvent.click(todoElement);

    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeChecked();
  });

  it("should remove a todo when the remove button is clicked", () => {
    render(
      <Provider store={store}>
        <TodoPage />
      </Provider>
    );

    const removeButtonElement = screen.getByRole("button", { name: /remove/i });
    fireEvent.click(removeButtonElement);

    const todoElement = screen.queryByText("Test Todo");
    expect(todoElement).not.toBeInTheDocument();
  });
});
