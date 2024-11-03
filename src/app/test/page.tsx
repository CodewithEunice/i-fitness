"use client";
import { useState } from "react";

const Test = () => {
  const [name, setName] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <main>
      <section className="bg-blue-400 w-full flex justify-center items-center h-screen">
        <div>
          <h1 className="text-2xl font-bold">what is your name</h1>
          <div className="my-5 flex gap-5">
            <label>Name</label>
            <input
              className="p-1"
              type="text"
              placeholder="Enter your Name
          "
              onChange={(e) => setName(e.target.value)}
            />
            {}
          </div>
          <button className="px-8 py-2 bg-blue-700 rounded-full cursor-pointer text-white">
            click me
          </button>
        </div>
      </section>
    </main>
  );
};

export default Test;
