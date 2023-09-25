import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home component", () => {
  test("renders the edit message", () => {
    render(<Home />);
    const editMessage = screen.getByText(/Get started by editing/i);
    expect(editMessage).toBeInTheDocument();
  });

  test("renders the Vercel logo", () => {
    render(<Home />);
    const vercelLogo = screen.getByAltText("Vercel Logo");
    expect(vercelLogo).toBeInTheDocument();
  });

});