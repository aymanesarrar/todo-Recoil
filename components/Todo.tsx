import { all, isActive, isCompleted } from "../utils/states";
import { useRecoilState, useRecoilValue } from "recoil";
import { MouseEventHandler } from "react";
import { useState } from "react";
type Props = {
  title: string;
};
const Todo = ({ title }: Props) => {
  //   const [AllItems, setAllItems] = useRecoilState(all);
  const [isComplete, setIsComplete] = useState(false);
  const [isActive, setIsActive] = useState(true);
  //   const all_items = useRecoilValue(all);
  const handleClick = () => {
    setIsComplete(!isComplete);
    setIsActive(!isActive);
  };
  console.log(isActive);
  return (
    <li>
      <label className="flex items-center cursor-pointer">
        <input type="checkbox" className="h-4 w-4" />
        <span className="ml-5 text-lg" onClick={handleClick}>
          {title}
        </span>
      </label>
    </li>
  );
};
export default Todo;
