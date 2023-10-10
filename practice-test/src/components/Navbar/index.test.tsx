import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryHistory, createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Navbar } from ".";

describe("navbar testing", () => {
  let history: MemoryHistory;
  const user = userEvent.setup();
  beforeEach(() => {
    history = createMemoryHistory();
    render(
      <Router location='/home' navigator={history}>
        <Navbar />
      </Router>
    );
  });

  it("renders 'Home' link", () => {
    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
  });

  it("renders 'Form' link", () => {
    const formLink = screen.getByText(/form/i);
    expect(formLink).toBeInTheDocument();
  });

  it("clicking 'Home' link navigates to '/home' path", async () => {
    const homeLink = screen.getByText(/home/i);
    await user.click(homeLink);
    expect(history.location.pathname).toBe("/home");
  });

  it("clicking 'Form' link navigates to '/home/form' path", async () => {
    const formLink = screen.getByText(/form/i);
    await user.click(formLink);
    expect(history.location.pathname).toBe("/home/form");
  });
});
