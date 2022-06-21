import { all } from "../utils/states";
import { useRecoilState, useRecoilValue } from "recoil";
import Todo from "./Todo";

export const Completed = () => {
  const all_items = useRecoilValue(all);
  return (
    <ul className="w-full md:w-[70%] flex flex-col p-4">
      {all_items &&
        all_items
          .filter((item) => item.completed === true)
          .map((item, index) => <Todo key={index} todo={item} />)}
    </ul>
  );
};
