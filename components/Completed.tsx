import { all, isCompleted } from "../utils/states";
import { useRecoilState, useRecoilValue } from "recoil";
import Todo from "./Todo";

export const Completed = () => {
  const all_items = useRecoilValue(all);
  const completed = useRecoilValue(isCompleted);
  return <ul className="w-full md:w-[70%] flex flex-col p-4">{}</ul>;
};
