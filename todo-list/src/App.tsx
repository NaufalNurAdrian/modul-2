import { useEffect, useRef, useState } from "react";
import { ITodo } from "./types/todo";
import Todos from "./component/todos";

function App() {
  const [todo, setTodo] = useState<ITodo[]>([
    { id: 1, desc: "Coding", isDone: false },
    { id: 2, desc: "Eat", isDone: false },
    { id: 3, desc: "Sleep", isDone: false },
    { id: 4, desc: "Repeat", isDone: false },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAdd = () => {
    if (inputRef.current) {
      if (inputRef.current.value == "")
        return alert("input tidak boleh kosong")
      const newTodo: ITodo = {
        id: todo.length ? Math.max(...todo.map((item) => item.id)) + 1 : 1,
        desc: inputRef.current.value,
        isDone: false,
      };
      setTodo((t) => [...t, newTodo]);
      inputRef.current.value = "";
    }
  }

  const handleDelete = (id: number) => {
    const newArr = todo.filter((item) => item.id !== id)
    setTodo(newArr)
  }

  const handleDone = (id: number) => {
    const newArr = todo.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone }
      }
      return {...item}
    })
    setTodo(newArr)
  }

  useEffect(() => {
    localStorage.setItem('name', 'andi')
  }, [])

    return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center content-center p-10 m-10 bg-teal-300 w-[500px] rounded-xl">
        <h1 className="text-[60px] font-bold text-center">ToDo list</h1>
        <Todos todos={todo} handleDelete={handleDelete} handleDone={handleDone}/>
        <div className="flex mt-10 min-w-[400px] gap-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="add to do here"
            className="w-full border border-teal-500 rounded-md "
          />
          <button className="bg-teal-500 p-2 rounded-md" onClick={handleAdd}>
            Add
          </button>
        </div>
        <p className="font-medium text-2xl mt-5">Done: {todo.filter((item) => item.isDone == true).length}</p>
      </div>
    </div>
    );
}
export default App;
