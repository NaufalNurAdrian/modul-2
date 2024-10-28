import { useCallback, useState } from "react";
import Todos from "./todod";

function CallbackComp() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => setCount(count + 1);
  const addTodo =  useCallback(() => {
    setTodos((t) => [...t, "New Todo"])
  }, [todos]);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr/>
        count: {count}
        <button onClick={increment}> + </button>
      
    </div>
  );
}
export default CallbackComp;
