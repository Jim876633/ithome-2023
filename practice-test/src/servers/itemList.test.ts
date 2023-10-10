import { store } from "@/store";
import { ItemType, itemListApi } from "./itemList";
import { data } from "@/mocks/handlers/itemList";

describe("itemListApi endpoints", () => {
  it("should fetch the list of items", async () => {
    const result = await store.dispatch(
      itemListApi.endpoints.getList.initiate()
    );
    expect(result.data).toEqual(data);
  });

  it("should add a new item", async () => {
    const newItem = { title: "New Item", id: 4 };
    const result = (await store.dispatch(
      itemListApi.endpoints.addItem.initiate(newItem)
    )) as { data: ItemType[] };
    expect(result.data).toEqual(data);
  });

  it("should remove an existing item", async () => {
    const itemId = 1;
    const result = (await store.dispatch(
      itemListApi.endpoints.removeItem.initiate(itemId)
    )) as { data: ItemType[] };
    expect(result.data).toEqual(data);
  });
});
