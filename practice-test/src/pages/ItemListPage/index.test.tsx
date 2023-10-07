import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  useAddItemMutation,
  useGetListQuery,
  useRemoveItemMutation,
} from "@/servers/itemList";
import { ItemListPage } from "./index";

jest.mock("@/servers/itemList", () => ({
  useGetListQuery: jest.fn(),
  useAddItemMutation: jest.fn(),
  useRemoveItemMutation: jest.fn(),
}));

const mockUseAddItemMutation = jest.fn();
const mockUseRemoveItemMutation = jest.fn();

describe("ItemListPage", () => {
  beforeEach(() => {
    (useGetListQuery as jest.Mock).mockReturnValue({
      data: [
        { id: 1, title: "Item 1" },
        { id: 2, title: "Item 2" },
      ],
      isLoading: false,
    });
    (useAddItemMutation as jest.Mock).mockReturnValue([mockUseAddItemMutation]);
    (useRemoveItemMutation as jest.Mock).mockReturnValue([
      mockUseRemoveItemMutation,
    ]);
    render(<ItemListPage />);
  });

  test("renders the input and button", () => {
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /add/i });
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("renders the list of items", () => {
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Item 1");
    expect(items[1]).toHaveTextContent("Item 2");
  });

  test("adds an item when the button is clicked", async () => {
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /add/i });
    await userEvent.type(input, "New Item");
    await userEvent.click(button);
    expect(mockUseAddItemMutation).toHaveBeenCalledWith({
      title: "New Item",
      id: expect.any(Number),
    });
  });

  test("removes an item when the delete button is clicked", async () => {
    const deleteButton = screen.getAllByRole("button", { name: /delete/i })[0];
    await userEvent.click(deleteButton);
    expect(mockUseRemoveItemMutation).toHaveBeenCalledWith(1);
  });
});
