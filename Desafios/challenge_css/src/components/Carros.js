import styles from "./Carros.module.css";

import React from "react";

const Carros = ({ Carros }) => {
  return (
    <div className={styles.card}>
      <h1>{Carros.name}</h1>
      <p>KM: {Carros.km}</p>
      <p>Cor: {Carros.color}</p>
    </div>
  );
};

export default Carros;
