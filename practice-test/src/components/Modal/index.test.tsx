import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./index";
import { ModalContext } from "@/context/ModalContext";

describe("Modal", () => {
  test("closes modal when close button is clicked", () => {
    const closeModal = jest.fn();
    const value = {
      isOpen: true,
      closeModal,
      openModal: () => {},
      content: "Test Content",
    };
    render(
      <ModalContext.Provider value={value}>
        <Modal />
      </ModalContext.Provider>
    );
    const closeButton = screen.getByTestId("close-btn");
    fireEvent.click(closeButton);
    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  test("displays correct content", () => {
    const value = {
      isOpen: true,
      closeModal: () => {},
      openModal: () => {},
      content: "Test Content",
    };
    render(
      <ModalContext.Provider value={value}>
        <Modal />
      </ModalContext.Provider>
    );
    const content = screen.getByText("Test Content");
    expect(content).toBeInTheDocument();
  });
});
