import { useState } from "react";

const ListRender = () => {
  const [list] = useState([
    "Matheus",
    "Gabrielly",
    "Raphael",
    "Robson",
    "Gisele",
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Matheus M", age: 17 },
    { id: 2, name: "Kratos", age: 1032 },
    { id: 3, name: "Jonny Cage", age: 26 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {" "}
        {users.map((user) => (
          <li key={user.id}>
            {" "}
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Deletar Usuario Random</button>
    </div>
  );
};

export default ListRender;
