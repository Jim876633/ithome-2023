import { render, screen, fireEvent } from "@testing-library/react";
import { ModalPage } from "./index";
import { ModalContext } from "@/context/ModalContext";
import { article1, article2 } from "./data/modal.data";

describe("ModalPage", () => {
  it("should call openModal with article1 when Article1 button is clicked", () => {
    const openModal = jest.fn();
    render(
      <ModalContext.Provider
        value={{ isOpen: false, openModal, closeModal: jest.fn(), content: "" }}
      >
        <ModalPage />
      </ModalContext.Provider>
    );
    fireEvent.click(screen.getByText("Article1"));
    expect(openModal).toHaveBeenCalledWith(article1);
  });

  it("should call openModal with article2 when Article2 button is clicked", () => {
    const openModal = jest.fn();
    render(
      <ModalContext.Provider
        value={{ isOpen: false, openModal, closeModal: jest.fn(), content: "" }}
      >
        <ModalPage />
      </ModalContext.Provider>
    );
    fireEvent.click(screen.getByText("Article2"));
    expect(openModal).toHaveBeenCalledWith(article2);
  });
});
