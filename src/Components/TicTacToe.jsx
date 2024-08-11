import React from "react";
import "../index.css";
import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
      setCount = [++count];
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "o";
      setCount = [++count];
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `"X" Wins`;
    } else if (winner === "o") {
      titleRef.current.innerHTML = `"O" Wins`;
    } else {
      titleRef.current.innerHTML = `Match Draw`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", "", ""];
    setCount(0);
    titleRef.current.innerHTML = `Tic Tac Toe <span> Game </span>`;
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };

  return (
    <div className=" bg-my-black m-0 p-0 h-screen w-screen">
      <section>
        <div className="text-center">
          <h1
            ref={titleRef}
            className="title font-rubik font-bold text-my-teal text-3xl items-center justify-center "
          >
            Tic Tac Toe <span className="text-my-grey pl-2"> Game </span>
          </h1>
          <div className="h-[600px] w-[564px] flex m-auto">
            <div className="row1">
              <div
                ref={box1}
                onClick={(e) => {
                  toggle(e, 0);
                }}
                className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              ></div>
              <div
                ref={box2}
                onClick={(e) => {
                  toggle(e, 1);
                }}
                className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              ></div>
              <div
                ref={box3}
                onClick={(e) => {
                  toggle(e, 2);
                }}
                className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              ></div>
            </div>
            <div className="row1">
              <div
                ref={box4}
                onClick={(e) => {
                  toggle(e, 3);
                }}
                className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              ></div>
              <div
                ref={box5}
                onClick={(e) => {
                  toggle(e, 4);
                }}
                className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              ></div>
              <div
                ref={box6}
                onClick={(e) => {
                  toggle(e, 5);
                }}
                className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              ></div>
            </div>
            <div className="row1">
              <div
                ref={box7}
                onClick={(e) => {
                  toggle(e, 6);
                }}
                className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              ></div>
              <div
                ref={box8}
                onClick={(e) => {
                  toggle(e, 7);
                }}
                className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              ></div>
              <div
                ref={box9}
                onClick={(e) => {
                  toggle(e, 8);
                }}
                className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              ></div>
            </div>
          </div>
          <button
            onClick={() => reset()}
            className="reset w-[100px] h-[50px] border-none outline-none cursor-pointer rounded-[50px] bg-my-teal text-my-grey font-robotomono font-bold mt-[25px] mb-[50px]"
          >
            Reset
          </button>
        </div>
      </section>
    </div>
  );
};

export default TicTacToe;
