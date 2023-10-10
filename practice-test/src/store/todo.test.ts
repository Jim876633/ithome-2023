import todoSlice, { TodoState, addTodo, removeTodo, toggleTodo } from "./todo";

describe("todoSlice", () => {
  let initialState: { todoList: TodoState[] };

  beforeEach(() => {
    initialState = { todoList: [] };
  });

  it("should handle adding a todo", () => {
    const newTodo = "Buy milk";
    const action = addTodo(newTodo);
    const newState = {
      todoList: [{ title: newTodo, id: expect.any(Number), isDone: false }],
    };
    expect(newState).toEqual(
      expect.objectContaining(todoSlice.reducer(initialState, action))
    );
  });

  it("should handle removing a todo", () => {
    const todoToRemove = {
      title: "Buy milk",
      id: 1,
      isDone: false,
    };
    initialState.todoList.push(todoToRemove);
    const action = removeTodo(todoToRemove.id);
    const newState = { todoList: [] };
    expect(newState).toEqual(
      expect.objectContaining(todoSlice.reducer(initialState, action))
    );
  });

  it("should handle toggling a todo", () => {
    const todoToToggle = {
      title: "Buy milk",
      id: 1,
      isDone: false,
    };
    initialState.todoList.push(todoToToggle);
    const action = toggleTodo(todoToToggle.id);
    const newState = {
      todoList: [{ ...todoToToggle, isDone: true }],
    };
    expect(newState).toEqual(
      expect.objectContaining(todoSlice.reducer(initialState, action))
    );
  });
});
