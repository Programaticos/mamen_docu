import React, { useState } from "react";
function Contador() {
  const [count, setCount] = useState(0); // Inicializamos un estado
  return (
    <div>
      <h1>Contador: {count}</h1>{" "}
      {/* Aquí estamos usando una expresión JavaScript */}
      <button onClick={() => setCount(count + (1 as number))}>
        Incrementar
      </button>
    </div>
  );
}

export default Contador;
