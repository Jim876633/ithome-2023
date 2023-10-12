import { Modal } from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ModalContext } from "@/context/ModalContext";

describe("modal testing", () => {
  const user = userEvent.setup();
  const closeModal = vi.fn();
  const contextProps = {
    openModal: vi.fn(),
    closeModal,
    isOpen: true,
    content: "test content",
  };

  it("點擊關閉按鈕，呼叫 closeModal 函式", async () => {
    render(
      <ModalContext.Provider value={contextProps}>
        {<Modal />}
      </ModalContext.Provider>
    );
    const closeBtn = screen.getByTestId("close-btn");
    await user.click(closeBtn);
    expect(closeModal).toHaveBeenCalled();
  });

  it("輸入 'test content' 文字，畫面顯示 'test content' 文字", async () => {
    render(
      <ModalContext.Provider value={contextProps}>
        {<Modal />}
      </ModalContext.Provider>
    );
    expect(screen.getByText("test content")).toBeInTheDocument();
  });
});
