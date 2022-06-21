import { all, isActive, isCompleted, Todos } from "../utils/states";
import { useRecoilState, useRecoilValue } from "recoil";
import { MouseEventHandler, useState } from "react";
type Props = {
  todo: Todos;
};
const Todo = ({ todo }: Props) => {
  const [allTodos, setAllTodos] = useRecoilState<Todos[]>(all);
  const [checked, setChecked] = useState(false);
  const [is_active, setIs_active] = useRecoilState(isActive);
  const [is_completed, setIs_Completed] = useRecoilState(isCompleted);
  const handleClick: MouseEventHandler = (e) => {
    const target = e.target as HTMLElement;
    const new_arr: Todos[] = [];
    for (let i = 0; i < allTodos.length; i++) {
      if (allTodos[i].title === target.innerText) {
        new_arr.push({
          title: allTodos[i].title,
          completed: !allTodos[i].completed,
          active: !allTodos[i].active,
          checked: !allTodos[i].checked,
        });
      } else new_arr.push(allTodos[i]);
    }
    setAllTodos((allTodos) => new_arr);
  };
  return (
    <li>
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="h-4 w-4"
          onChange={() => setChecked(todo.checked)}
          checked={todo.checked}
        />
        <span
          className={`ml-5 text-lg ${todo.checked ? "line-through" : ""}`}
          onClick={handleClick}
        >
          {todo.title}
        </span>
      </label>
    </li>
  );
};
export default Todo;
