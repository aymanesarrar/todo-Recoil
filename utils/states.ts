import { atom } from "recoil";

export type Todos = {
  title: string;
  completed: boolean;
  active: boolean;
  checked: boolean;
};

const input = atom({
  key: "Input",
  default: "",
});

const all = atom({
  key: "All",
  default: [] as Todos[],
});
const active = atom({
  key: "Active",
  default: [] as Todos[],
});
const completed = atom({
  key: "Completed",
  default: [] as Todos[],
});

const choice = atom({
  key: "Choice",
  default: "All",
});

const isActive = atom({
  key: "IsActive",
  default: true,
});

const isCompleted = atom({
  key: "IsCompleted",
  default: false,
});

export { input, all, choice, completed, active, isActive, isCompleted };
// export { input, all, active, completed, isCompleted, choice, isActive };
