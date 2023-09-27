import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ModalPage } from ".";
import { article1, article2 } from "./data/modal.data";
import { ModalContext } from "@/context/ModalContext";

describe("modalPage testing", () => {
  const user = userEvent.setup();
  const openModal = jest.fn();
  const contextProps = {
    openModal,
    closeModal: jest.fn(),
    isOpen: false,
    content: "",
  };

  it("點擊 Article1 呼叫 openModal 函式帶入 article1 文字", async () => {
    render(
      <ModalContext.Provider value={contextProps}>
        <ModalPage />
      </ModalContext.Provider>
    );
    const article1Btn = screen.getByRole("button", { name: /article1/i });
    await user.click(article1Btn);
    expect(openModal).toHaveBeenCalledWith(article1);
  });

  it("點擊 Article2 呼叫 openModal 函式帶入 article2 文字", async () => {
    render(
      <ModalContext.Provider value={contextProps}>
        <ModalPage />
      </ModalContext.Provider>
    );
    const article1Btn = screen.getByRole("button", { name: /article2/i });
    await user.click(article1Btn);
    expect(openModal).toHaveBeenCalledWith(article2);
  });
});
