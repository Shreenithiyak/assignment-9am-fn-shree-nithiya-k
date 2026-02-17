function User() {
  const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
export default User;