import Todo from "./Todo";

type Props = {
  todos: string[];
};

export const All = ({ todos }: Props) => {
  return (
    <ul className="w-full md:w-[70%] flex flex-col p-4">
      {todos && todos.map((todo, index) => <Todo key={index} title={todo} />)}
    </ul>
  );
};
