import todoSlice, { TodoState, addTodo, removeTodo, toggleTodo } from "./todo";

describe("todoSlice", () => {
  let initialState: { todoList: TodoState[] };
  const todo1 = { id: 1, title: "Test Todo 1", isDone: false };
  const todo2 = { id: 2, title: "Test Todo 2", isDone: false };
  const todo3 = { id: 3, title: "Test Todo 3", isDone: false };
  const state = { todoList: [todo1, todo2, todo3] };

  beforeEach(() => {
    initialState = { todoList: [] };
  });

  it("當 addTodo 函式輸入 'Test Todo' todoList 新增一項 todo title 為 Test Todo 且 isDone 為 false", () => {
    const actual = todoSlice.reducer(initialState, addTodo("Test Todo"));
    expect(actual.todoList.length).toEqual(1);
    expect(actual.todoList[0].title).toEqual("Test Todo");
    expect(actual.todoList[0].isDone).toEqual(false);
  });

  it("當 removeTodo 函式輸入 2 則只移除 id 為 2 的 todo", () => {
    const actual = todoSlice.reducer(state, removeTodo(2));
    expect(actual.todoList.length).toEqual(2);
    expect(actual.todoList).toContain(todo1);
    expect(actual.todoList).toContain(todo3);
    expect(actual.todoList).not.toContain(todo2);
  });

  it("當 toggleTodo 函式輸入 2 則 id 為 2 的 todo isDone 為 true", () => {
    const actual = todoSlice.reducer(state, toggleTodo(2));
    expect(actual.todoList[1].isDone).toEqual(true);
  });
});
