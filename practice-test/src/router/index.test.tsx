import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routerConfig } from ".";

// Mock components
jest.mock("@/pages/HomePage/Home/index.tsx", () => {
  return {
    Home: () => <div>home page</div>,
  };
});

jest.mock("@/pages/FormPage/index.tsx", () => {
  return {
    FormPage: () => <div>form page</div>,
  };
});

// Tests
describe("router testing", () => {
  it("renders home page when path is '/'", () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  it("renders home page when path is '/home'", () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ["/home"],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  it("renders form page when path is '/home/form'", () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ["/home/form"],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/form page/i)).toBeInTheDocument();
  });
});
