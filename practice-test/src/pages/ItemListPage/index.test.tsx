import { data } from "@/mocks/handlers/itemList";
import {
  useAddItemMutation,
  useGetListQuery,
  useRemoveItemMutation,
} from "@/servers/itemList";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ItemListPage } from "./index";

jest.mock("@/servers/itemList", () => ({
  useGetListQuery: jest.fn(),
  useAddItemMutation: jest.fn(),
  useRemoveItemMutation: jest.fn(),
}));

describe("ItemListPage testing", () => {
  const user = userEvent.setup();
  const mockListQueryData = data;

  const mockAddItemMutation = jest.fn();
  const mockRemoveItemMutation = jest.fn();

  (useGetListQuery as jest.Mock).mockReturnValue({
    data: mockListQueryData,
    isLoading: false,
  });
  (useAddItemMutation as jest.Mock).mockReturnValue([mockAddItemMutation]);
  (useRemoveItemMutation as jest.Mock).mockReturnValue([
    mockRemoveItemMutation,
  ]);
  beforeEach(() => {
    render(<ItemListPage />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("初始畫面顯示 mock data 所有正確的 title", async () => {
    mockListQueryData.forEach((item) => {
      const itemElement = screen.getByText(item.title);
      expect(itemElement).toBeInTheDocument();
    });
  });

  it("當使用者輸入「test4」，呼叫 mockAddItemMutation 傳入 {title: 'test4'}", async () => {
    const inputElement = screen.getByRole("textbox");
    const addButtonElement = screen.getByText("ADD", {
      selector: "button",
    });

    await user.type(inputElement, "test4");
    await user.click(addButtonElement);

    expect(mockAddItemMutation).toHaveBeenCalledWith({
      title: "test4",
      id: expect.any(Number),
    });
  });

  it("當使用者點擊第一個 Delete 按鈕，呼叫 mockRemoveItemMutation 傳入 1", async () => {
    const deleteButtonElement = screen.getAllByText("Delete", {
      selector: "button",
    })[0];

    await user.click(deleteButtonElement);

    expect(mockRemoveItemMutation).toHaveBeenCalledWith(1);
  });
});
