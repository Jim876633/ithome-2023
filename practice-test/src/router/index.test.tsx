import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routerConfig } from ".";

vi.mock("@/pages/HomePage/Home/index.tsx", () => {
  return {
    Home: () => <div>home page</div>,
  };
});

vi.mock("@/pages/FormPage/index.tsx", () => {
  return {
    FormPage: () => <div>form Page</div>,
  };
});

const renderRouter = (path: string) => {
  const router = createMemoryRouter(routerConfig, {
    initialEntries: [path],
  });

  render(<RouterProvider router={router} />);
};

describe("router testing", () => {
  it("當 router 路徑為 '/home' 顯示 'home page' 文字", () => {
    renderRouter("/home");

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  it("當 router 路徑為 '/home/form' 顯示 'form page' 文字", () => {
    renderRouter("/home/form");

    expect(screen.getByText(/form page/i)).toBeInTheDocument();
  });
});
