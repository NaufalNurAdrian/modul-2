import { useState } from "react";

function StateComp() {
  const [count, setCount] = useState<number>(0); //cara 1

  const decrement = () => {  //cara 2
    setCount(count - 1)
  }
  return (
    <div>
        
      <button onClick={() => setCount(count + 1)}>+</button>

      <h1>{count}</h1>

      <button onClick={decrement}>-</button>

    </div>
  );
}

export default StateComp;
