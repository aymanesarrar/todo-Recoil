import { useRecoilState, useRecoilValue } from "recoil";
import { all, input, isActive, isCompleted, Todos } from "../utils/states";
import { ChangeEvent, FormEvent, FormEventHandler } from "react";
export const Form = () => {
  const [todoInput, setTodoInput] = useRecoilState(input);
  const [todos, setTodos] = useRecoilState<Todos[]>(all);
  const is_active = useRecoilValue(isActive);
  const is_completed = useRecoilValue(isCompleted);
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodoInput(e.target.value);
  };
  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    setTodos((todos) => [
      ...todos,
      {
        title: todoInput,
        completed: is_completed,
        active: is_active,
        checked: false,
      },
    ]);
    setTodoInput("");
  };
  return (
    <form className="mt-7 flex w-full md:w-1/2" onSubmit={handleForm}>
      <input
        type="text"
        placeholder="add details"
        className="flex-1 border-2 border-gray-400 px-5 py-2 rounded-lg md:mr-8 outline-none"
        onChange={handleInput}
        value={todoInput}
      />
      <button className="text-white bg-[#2F80ED] rounded-[12px] shadow-2xl w-20">
        Add
      </button>
    </form>
  );
};
