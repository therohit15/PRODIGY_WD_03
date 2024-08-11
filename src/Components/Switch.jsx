import React from "react";
import { useState } from "react";
import classNames from "classnames";

const Switch = ({ isSelected, setIsSelected }) => {
  return (
    <main className=" bg-my-black m-0 p-0 ">
      <div className="flex items-center justify-center ">
        <div className="font-rubik font-bold text-[#ffc532] text-3xl">
          2-Player
        </div>
        <div
          onClick={() => setIsSelected(!isSelected)}
          className={classNames(
            "flex w-20 h-10 bg-gray-600  ml-3 rounded-full items-center mr-3",
            {
              "bg-green-600": isSelected,
            }
          )}
        >
          <span
            className={classNames(
              "h-10 w-10 bg-white rounded-full cursor-pointer transition-all duration-300",
              {
                "ml-10": isSelected,
              }
            )}
          ></span>
        </div>
        <div className="font-rubik font-bold text-[#2bfdc9] text-3xl mr-4">
          AI
        </div>
      </div>
    </main>
  );
};

export default Switch;
