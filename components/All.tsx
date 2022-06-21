import { Todos } from "../utils/states";
import Todo from "./Todo";

type Props = {
  todos: Todos[];
};

export const All = ({ todos }: Props) => {
  return (
    <ul className="w-full md:w-[70%] flex flex-col p-4">
      {todos && todos.map((todo, index) => <Todo key={index} todo={todo} />)}
    </ul>
  );
};
