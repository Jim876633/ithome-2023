import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { TodoPage } from ".";
import userEvent from "@testing-library/user-event";

describe("TodoPage", () => {
  const user = userEvent.setup();
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoPage />
      </Provider>
    );
  });

  it("當輸入「New Todo」並點擊 add 按鈕，顯示「New Todo」文字", async () => {
    const inputElement = screen.getByRole("textbox");
    const addButtonElement = screen.getByRole("button", { name: /add/i });

    await user.type(inputElement, "New Todo");
    await user.click(addButtonElement);

    const todoElement = screen.getByText("New Todo");
    expect(todoElement).toBeInTheDocument();
  });

  it("當點擊「New Todo」文字，checkbox 會被勾選", async () => {
    const todoElement = screen.getByText("New Todo");
    await user.click(todoElement);

    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeChecked();
  });

  it("當點擊 remove 按鈕，'New Todo' 文字不會顯示", async () => {
    const removeButtonElement = screen.getByRole("button", { name: /remove/i });
    await user.click(removeButtonElement);

    const todoElement = screen.queryByText("New Todo");
    expect(todoElement).not.toBeInTheDocument();
  });
});
