import { render, screen } from "@testing-library/react";
import { useFetchUserData } from "@/api/fetchData";
import { ApiPage } from "./index";
import { fakerUserList } from "@/mocks/handlers/userList";

jest.mock("@/api/fetchData");

// API 測試
describe("ApiPage", () => {
  test("renders loading message when data is loading", () => {
    (useFetchUserData as jest.Mock).mockReturnValue({
      isLoading: true,
      data: null,
    });

    render(<ApiPage />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders user data when data is loaded", () => {
    const mockData = [
      { id: 1, name: "John Doe", email: "john.doe@example.com" },
      { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
    ];

    (useFetchUserData as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockData,
    });

    render(<ApiPage />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("jane.doe@example.com")).toBeInTheDocument();
  });
});

// API (msw) 測試
describe("ApiPage", () => {
  it("renders loading state", () => {
    (useFetchUserData as jest.Mock).mockReturnValue({
      isLoading: true,
      data: null,
    });

    render(<ApiPage />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders user data", async () => {
    (useFetchUserData as jest.Mock).mockReturnValue({
      isLoading: false,
      data: fakerUserList,
    });

    render(<ApiPage />);

    expect(await screen.findByText(fakerUserList[0].name)).toBeInTheDocument();
    expect(await screen.findByText(fakerUserList[0].email)).toBeInTheDocument();
    expect(await screen.findByText(fakerUserList[1].name)).toBeInTheDocument();
    expect(await screen.findByText(fakerUserList[1].email)).toBeInTheDocument();
  });
});
