import { render, screen } from "@testing-library/react";
import { useFetchUserData } from "@/api/fetchData";
import { ApiPage } from "./index";

jest.mock("@/api/fetchData");

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
