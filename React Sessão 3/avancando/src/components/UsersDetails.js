import React from "react";

const UsersDetails = ({ nome, id, profissão, idade }) => {
  return (
    <div>
      <h2>{nome}</h2>
      <p>
        Id: {id} <br />
        Profissão: {profissão} <br />
        Idade: {idade}
      </p>

      {idade >= 18 ? <p>Pode tirar carta</p> : <p>Menor de Idade</p>}
    </div>
  );
};

export default UsersDetails;
