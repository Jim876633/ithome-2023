import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormPage } from "./index";

describe("Form page testing", () => {
  it("當未輸入任何欄位，按下送出按鈕，不會呼叫 alert 函式", async () => {
    const user = userEvent.setup();
    render(<FormPage />);
    const submitButton = screen.getByRole("button", { name: "Submit" });
    await user.click(submitButton);
    expect(window.alert).not.toHaveBeenCalled();
  });

  it("當 firstName 欄位輸入「Alice」、lastName 欄位輸入「Robinson」、taiwan id 欄位輸入「A123456789」，按下送出按鈕，呼叫 alert 函式", async () => {
    const user = userEvent.setup();
    render(<FormPage />);
    const firstNameInput = screen.getByLabelText(/firstName/i);
    const lastNameInput = screen.getByLabelText(/lastName/i);
    const taiwanIdInput = screen.getByLabelText(/taiwan id/i);
    const submitButton = screen.getByRole("button", { name: "Submit" });

    await user.type(firstNameInput, "Alice");
    await user.type(lastNameInput, "Robinson");
    await user.type(taiwanIdInput, "A123456789");
    await user.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith(
      JSON.stringify({
        firstName: "Alice",
        lastName: "Robinson",
        twId: "A123456789",
      })
    );
  });

  it("當 firstName 欄位輸入「Daniel」，按下送出按鈕，顯示「不可大於 5 個字」", async () => {
    const user = userEvent.setup();
    render(<FormPage />);
    const firstNameInput = screen.getByLabelText(/firstName/i);
    const submitButton = screen.getByRole("button", { name: "Submit" });

    await user.type(firstNameInput, "Daniel");
    await user.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.getByText(/不可大於 5 個字/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it("當 lastName 欄位輸入「Butterworth」，按下送出按鈕，顯示「不可大於 10 個字」", async () => {
    const user = userEvent.setup();
    render(<FormPage />);
    const lastNameInput = screen.getByLabelText(/lastName/i);
    const submitButton = screen.getByRole("button", { name: "Submit" });

    await user.type(lastNameInput, "Butterworth");
    await user.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.getByText(/不可大於 10 個字/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it("當 taiwan id 欄位輸入「A123」，按下送出按鈕，顯示「身分證字號格式錯誤」", async () => {
    const user = userEvent.setup();
    render(<FormPage />);
    const taiwanIdInput = screen.getByLabelText(/taiwan id/i);
    const submitButton = screen.getByRole("button", { name: "Submit" });

    await user.type(taiwanIdInput, "A123");
    await user.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.getByText(/身分證字號格式錯誤/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
