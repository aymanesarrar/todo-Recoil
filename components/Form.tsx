import { useRecoilState } from "recoil";
import { all, input } from "../utils/states";
import { ChangeEvent, FormEvent, FormEventHandler } from "react";
export const Form = () => {
  const [todoInput, setTodoInput] = useRecoilState(input);
  const [todos, setTodos] = useRecoilState<string[]>(all);
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodoInput(e.target.value);
  };
  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    setTodos((todos) => [
      ...todos,
      todoInput,
      // { title: todoInput, completed: false, active: true },
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
