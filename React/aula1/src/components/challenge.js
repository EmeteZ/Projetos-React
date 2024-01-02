const Challenge = () => {
  const numero1 = 10;
  const numero2 = 20;

  const Soma = () => {
    console.log(10 + 20);
  };

  return (
    <div>
      <div>
        <button onClick={Soma}>Soma Tipo 1</button>
      </div>

      <div>
        <button onClick={() => console.log(numero1 + numero2)}>
          Soma Tipo 2
        </button>
      </div>
    </div>
  );
};

export default Challenge;
