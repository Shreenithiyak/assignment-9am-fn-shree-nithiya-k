function TodoList() {
  const todos = [{ id: 1, task: "Learn React" }];
  return <ul>{todos.map(t => <li key={t.id}>{t.task}</li>)}</ul>;
}

export default TodoList