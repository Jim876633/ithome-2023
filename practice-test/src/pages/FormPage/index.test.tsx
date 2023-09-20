import { FormPage } from "@/pages/FormPage";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Form page testing", () => {
  const user = userEvent.setup();
  it("當未輸入任何欄位，按下送出按鈕，不會呼叫 alert 函式", async () => {
    render(<FormPage />);
    await user.click(screen.getByRole("button", { name: /submit/i }));
    expect(alert).not.toHaveBeenCalled();
  });
  it("當 firstName 欄位輸入「Alice」、lastName 欄位輸入「Robinson」、twId 欄位輸入「A123456789」，按下送出按鈕，呼叫 alert 函式", async () => {
    render(<FormPage />);
    await user.type(screen.getByLabelText(/firstname/i), "Alice");
    await user.type(screen.getByLabelText(/lastname/i), "Robinson");
    await user.type(screen.getByLabelText(/taiwan id/i), "A123456789");
    await user.click(screen.getByRole("button", { name: /submit/i }));
    expect(alert).toHaveBeenCalledWith(
      JSON.stringify({
        firstName: "Alice",
        lastName: "Robinson",
        twId: "A123456789",
      })
    );
  });
  it("當 firstName 欄位輸入「Daniel」，按下送出按鈕，顯示「不可大於 5 個字」", async () => {
    render(<FormPage />);
    await user.type(screen.getByLabelText(/firstname/i), "Daniel");
    await user.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/不可大於 5 個字/i)).toBeInTheDocument();
  });
  it("當 lastName 欄位輸入「Butterworth」，按下送出按鈕，顯示「不可大於 10 個字」", async () => {
    render(<FormPage />);
    await user.type(screen.getByLabelText(/lastname/i), "Butterworth");
    await user.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/不可大於 10 個字/i)).toBeInTheDocument();
  });
  it("當 twId 欄位輸入「A123」，按下送出按鈕，顯示「身分證字號格式錯誤」", async () => {
    render(<FormPage />);
    await user.type(screen.getByLabelText(/taiwan id/i), "A123");
    await user.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/身分證字號格式錯誤/i)).toBeInTheDocument();
  });
});
