import useCounter from "./useCounter";
import { renderHook, act } from "@testing-library/react";

it("should increment and decrement the counter", () => {
  const { result } = renderHook(useCounter);

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment(); // 呼叫 + 1 函式
  });

  expect(result.current.count).toBe(1);

  act(() => {
    result.current.decrement(); // 呼叫 -1 函式
  });

  expect(result.current.count).toBe(0);
});
