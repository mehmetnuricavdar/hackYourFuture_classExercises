import UserItem from "./UserItem";

export default function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <UserItem id={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
}
