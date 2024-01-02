const Events = () => {
  const handleMyEvent = () => {
    console.log("Ativou paizao");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Tambem posso renderizare isso</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Ativou aqui tmb")}>
          Clique Aqui Tmb
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
