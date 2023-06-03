export default function UserItemExpanded({
  fullname,
  address,
  age,
  height,
  languages,
}) {
  return (
    <li>
      <p>User Name: {fullname} </p>
      <p>User Address : {address}</p>
      <p>User Age : {age} </p>
      <p>User Height : {height} </p>
      <p>
        User Languages :{" "}
        {languages?.map((lang) => (
          <p>{lang}</p>
        ))}
      </p>
    </li>
  );
}
