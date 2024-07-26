import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(true);

  const [name] = useState("João");
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>se X for true ss</p>}
      {!x && <p>se X for false ss</p>}
      {name === "João" ? (
        <div>
          {" "}
          <p> o nome é João</p>{" "}
        </div>
      ) : (
        <div>
          {" "}
          <p> o nome não encontrado</p>{" "}
        </div>
      )}
    </div>
  );
};

export default CondicionalRender;
