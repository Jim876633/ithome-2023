import { data } from "@/mocks/handlers/itemList";
import { ItemType, itemListApi } from "./itemList";

import { store } from "@/store";

describe("Redux Toolkit Query API Tests", () => {
  it("當 store dispatch getList 函式，回傳三個正確的 data", async () => {
    const result = await store.dispatch(
      itemListApi.endpoints.getList.initiate()
    );
    expect(result.data?.length).toEqual(3);
    expect(result.data).toEqual(data);
  });

  it("當 store dispatch addItem 函式，傳入 mockItem，回傳四個正確的 data", async () => {
    const mockItem = {
      id: 4,
      title: "test 4",
    };
    const result = (await store.dispatch(
      itemListApi.endpoints.addItem.initiate(mockItem)
    )) as { data: ItemType[] };

    expect(result.data.length).toEqual(4);
    expect(result.data).toEqual(data);
  });

  it("當 store dispatch removeItem 函式，傳入 id 1，回傳三個正確的 data", async () => {
    const mockId = 1;
    const result = (await store.dispatch(
      itemListApi.endpoints.removeItem.initiate(mockId)
    )) as { data: ItemType[] };

    expect(result.data.length).toEqual(3);
    expect(result.data).toEqual(data);
  });
});
