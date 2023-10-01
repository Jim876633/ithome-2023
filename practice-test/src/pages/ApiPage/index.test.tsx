import { render, screen } from "@testing-library/react";
import { useFetchUserData } from "@/api/fetchData";
import { ApiPage } from "./index";
import { fakerUserList } from "@/mocks/handlers";

jest.mock("@/api/fetchData");

describe("ApiPage", () => {
  it("當 isLoading 為 false 畫面顯示 data 資料", () => {
    const mockData = fakerUserList;
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
