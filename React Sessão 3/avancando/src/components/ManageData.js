import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(15);
  return (
    <div>
      <div>
        <p>Valor de someData= {someData}</p>
        <button onClick={() => (someData = 15)}> Mudar Variavel </button>
      </div>
      <div>
        <p> Valor de Number= {number}</p>
        <button onClick={() => setNumber(20)}> Mudar useState </button>
      </div>
    </div>
  );
};

export default ManageData;
