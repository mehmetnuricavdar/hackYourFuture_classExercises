import UserItemExpanded from "./UserItemExpanded";

export default function UserListExpanded({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <UserItemExpanded
          fullname={user.fullname}
          address={user.address}
          age={user.age}
          height={user.height}
          languages={user.languages}
        />
      ))}
    </ul>
  );
}
