import { render, screen } from "@testing-library/react";
import { useFetchUserData } from "@/api/fetchData";
import { ApiPage } from "./index";

jest.mock("@/api/fetchData");

describe("ApiPage", () => {
  it("當 isLoading 為 true 畫面顯示 'Loading...' 文字", () => {
    (useFetchUserData as jest.Mock).mockReturnValue({
      isLoading: true,
      data: null,
    });

    render(<ApiPage />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("當 isLoading 為 false 畫面顯示 data 資料", () => {
    const mockData = [
      { id: 1, name: "John Doe", email: "john.doe@example.com" },
      { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    ];
    (useFetchUserData as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockData,
    });

    render(<ApiPage />);
    mockData.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
    });
  });
});
