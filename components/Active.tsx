import { all } from "../utils/states";
import { useRecoilState, useRecoilValue } from "recoil";
import Todo from "./Todo";

export const Active = () => {
  const all_items = useRecoilValue(all);

  return <ul className="w-full md:w-[70%] flex flex-col p-4">{}</ul>;
};
