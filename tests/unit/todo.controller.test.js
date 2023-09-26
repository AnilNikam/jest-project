const TodoController = require("../../controller/todo.controller");

decribe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });
});
