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

  it("點擊 'home' 連結，網址導頁到 '/home' 路徑", async () => {
    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
    await user.click(homeLink);
    expect(history.location.pathname).toBe("/home");
  });

  it("點擊 'form' 連結，網址導頁到 '/home/form' 路徑", async () => {
    const button = screen.getByText(/form/i);
    await user.click(button);
    expect(history.location.pathname).toBe("/home/form");
  });
});
