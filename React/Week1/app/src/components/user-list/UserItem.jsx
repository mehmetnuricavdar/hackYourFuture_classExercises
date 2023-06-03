export default function UserItem({ id, name, age }) {
  return (
    <li>
      <p>User ID: {id} </p>
      <p>User Name : {name}</p>
      <p>User Age : {age} </p>
    </li>
  );
}
