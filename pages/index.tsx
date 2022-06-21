import type { NextPage } from "next";
import Head from "next/head";
import { Form } from "../components/Form";
import { all, choice, Todos } from "../utils/states";
import { useRecoilValue, useRecoilState } from "recoil";
import { All } from "../components/All";
import { MouseEventHandler } from "react";
import { Completed } from "../components/Completed";
import { Active } from "../components/Active";

const Home: NextPage = () => {
  const [filter, setFilter] = useRecoilState(choice);
  const todos = useRecoilValue<Todos[]>(all);

  const handleClick: MouseEventHandler = (e) => {
    const target = e.target as HTMLElement;
    setFilter(target.innerText);
  };
  const getElements = (filter: string) => {
    if (filter == "All") return <All todos={todos} />;
    else if (filter == "Completed") return <Completed />;
    else return <Active />;
  };
  return (
    <div className="min-h-screen md:max-w-4xl lg:max-w-7xl mx-auto">
      <Head>
        <title>Todo app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center p-2">
        <h1 className="text-3xl font-bold">#todo</h1>
        <ul className="border-b-2 border-b-gray-300 flex justify-around w-full lg:w-[70%] mt-5 h-10">
          <li
            onClick={handleClick}
            className="relative cursor-pointer  hover:scale-105 transition-all"
          >
            All
            <div
              className={`absolute -bottom-0.5 -left-3 w-12 border-blue-600 border-t-4 rounded-lg transition-all duration-300 ${
                filter === "All" ? "" : "hidden"
              }`}
            ></div>
          </li>
          <li
            onClick={handleClick}
            className="cursor-pointer  hover:scale-105 transition-all relative"
          >
            Active
            <div
              className={`absolute -bottom-0.5 -left-3 w-20 border-blue-600 border-t-4 rounded-lg transition-all duration-300 ${
                filter === "Active" ? "" : "hidden"
              }`}
            ></div>
          </li>
          <li
            onClick={handleClick}
            className="cursor-pointer  hover:scale-105 transition-all relative"
          >
            Completed
            <div
              className={`absolute -bottom-0.5 -left-3 w-28 border-blue-600 border-t-4 rounded-lg transition-all duration-300 ${
                filter === "Completed" ? "" : "hidden"
              }`}
            ></div>
          </li>
        </ul>
        <Form />
        {getElements(filter)}
      </main>
    </div>
  );
};

export default Home;
