import { ITodo } from "../types/todo";
import trash from "../assets/trash.svg";

interface IProps {
    todos: ITodo[];
    handleDelete: (id: number) => void;
    handleDone: (id: number) => void
  }

function Todos({ todos, handleDelete, handleDone }: IProps) {
  return (
    <div className="flex flex-col gap-2">
      {todos.map((item, idx) => {
        return (
          <div
            key={idx}
            className="flex min-w-[400px] justify-between items-center"
          >
            <input onClick={() => handleDone(item.id)} checked={item.isDone} type="checkbox" />
            <div>{item.desc}</div>
            <button onClick={() => handleDelete(item.id)} className="trash flex w-10 h-10 border border-red-600 stroke-current items-center justify-center rounded-md">
              <img src={trash} alt="trash" style={{ width: "15px" }} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default Todos;
