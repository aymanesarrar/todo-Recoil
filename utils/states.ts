import { atom } from "recoil";

const input = atom({
  key: "Input",
  default: "",
});

const all = atom({
  key: "All",
  default: [] as string[],
});
// const active = atom({
//   key: "Active",
//   default: [] as Todos[],
// });
// const completed = atom({
//   key: "Completed",
//   default: [] as Todos[],
// });

const isCompleted = atom({
  key: "IsCompleted",
  default: false as boolean,
});
const isActive = atom({
  key: "IsActive",
  default: true as boolean,
});

const choice = atom({
  key: "Choice",
  default: "All",
});

export { input, all, isCompleted, choice, isActive };
// export { input, all, active, completed, isCompleted, choice, isActive };
