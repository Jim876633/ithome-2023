import { render, screen } from "@testing-library/react";
import { useFetchUserData } from "@/api/fetchData";
import { ApiPage } from "./index";
import { fakerUserList } from "@/mocks/handlers";

jest.mock("@/api/fetchData");

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
