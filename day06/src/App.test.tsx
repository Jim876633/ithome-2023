import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders Vite and React logos", () => {
    render(<App />);
    const viteLogo = screen.getByAltText("Vite logo");
    const reactLogo = screen.getByAltText("React logo");
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  it("renders the initial count as 0", () => {
    render(<App />);
    const countButton = screen.getByText(/count is 0/i);
    expect(countButton).toBeInTheDocument();
  });

  it("increments the count when the button is clicked", () => {
    render(<App />);
    const countButton = screen.getByText(/count is 0/i);
    fireEvent.click(countButton);
    expect(countButton).toHaveTextContent(/count is 1/i);
  });
});
