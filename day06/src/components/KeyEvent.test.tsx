import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import KeyEvent from "./KeyEvent";

const user = userEvent.setup();

describe("KeyEventsComponent", () => {
  it("should simulate key events with userEvent.type", async () => {
    render(<KeyEvent />);
    const inputElement = screen.getByTestId("input");
    const keyEventElement = screen.getByTestId("key-event");

    await user.type(inputElement, "Hello");

    expect(inputElement).toHaveValue("Hello");

    expect(keyEventElement.textContent).toContain("Key Down: o");
    expect(keyEventElement.textContent).toContain("Key Up: o");
    expect(keyEventElement.textContent).toContain("Key Down: e");
    expect(keyEventElement.textContent).toContain("Key Up: e");
  });
});

describe("KeyEventsComponent", () => {
  it("test with fireEvent", async () => {
    render(<KeyEvent />);
    const inputElement = screen.getByTestId("input");
    const keyEventElement = screen.getByTestId("key-event");

    fireEvent.change(inputElement, { target: { value: "Hello" } });
    fireEvent.keyDown(inputElement, { key: "o" });
    fireEvent.keyUp(inputElement, { key: "o" });

    expect(inputElement).toHaveValue("Hello");

    expect(keyEventElement.textContent).toContain("Key Down: o");
    expect(keyEventElement.textContent).toContain("Key Up: o");
  });
});
