import {
  useAddItemMutation,
  useGetListQuery,
  useRemoveItemMutation,
} from "@/servers/itemList";
import { useState } from "react";
import styled from "./index.module.scss";

export const ItemListPage = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const { data: listQueryData, isLoading: isListQueryLoading } =
    useGetListQuery();

  const [addItem] = useAddItemMutation();
  const [removeItem] = useRemoveItemMutation();

  const addItemHandler = () => {
    if (inputValue) {
      addItem({ title: inputValue, id: Math.random() });
      setInputValue("");
    }
  };

  const deleteHandler = (id: number) => {
    removeItem(id);
  };

  if (isListQueryLoading) return <div>Loading...</div>;

  if (listQueryData) {
    return (
      <div className={styled.container}>
        <div className={styled.inputBlock}>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addItemHandler}>ADD</button>
        </div>
        <ul>
          {listQueryData.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <button onClick={() => deleteHandler(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
};
