import React, { useState, useRef } from "react";
import "../index.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
const huPlayer = "o";
const aiPlayer = "x";

const AI = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock || data[num]) return;

    let newData = [...data];
    newData[num] = huPlayer;
    setData(newData);
    e.target.innerHTML = `<img src='${circle_icon}'>`;

    if (checkWin(newData, huPlayer)) {
      gameOver(huPlayer);
    } else if (!checkTie(newData)) {
      const bestMove = minmax(newData, aiPlayer).index;
      newData[bestMove] = aiPlayer;
      setData(newData);
      document.getElementById(bestMove).innerHTML = `<img src='${cross_icon}'>`;
      if (checkWin(newData, aiPlayer)) {
        gameOver(aiPlayer);
      } else if (checkTie(newData)) {
        gameOver(null);
      }
    }
  };

  const checkWin = (board, player) => {
    let plays = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
      if (win.every((elem) => plays.indexOf(elem) > -1)) {
        gameWon = { index: index, player: player };
        break;
      }
    }
    return gameWon;
  };

  const gameOver = (winner) => {
    setLock(true);
    if (winner === huPlayer) {
      titleRef.current.innerHTML = "Player Wins!";
    } else if (winner === aiPlayer) {
      titleRef.current.innerHTML = "AI Wins!";
    } else {
      titleRef.current.innerHTML = "It's a Tie!";
    }
  };

  const checkTie = (board) => {
    if (board.every((square) => square !== "")) {
      gameOver(null);
      return true;
    }
    return false;
  };

  const minmax = (newBoard, player) => {
    const availableSpots = newBoard
      .map((val, index) => (val === "" ? index : null))
      .filter((val) => val !== null);

    if (checkWin(newBoard, huPlayer)) {
      return { score: -10 };
    } else if (checkWin(newBoard, aiPlayer)) {
      return { score: 10 };
    } else if (availableSpots.length === 0) {
      return { score: 0 };
    }

    const moves = availableSpots.map((spot) => {
      let move = { index: spot };
      newBoard[spot] = player;

      if (player === aiPlayer) {
        move.score = minmax(newBoard, huPlayer).score;
      } else {
        move.score = minmax(newBoard, aiPlayer).score;
      }

      newBoard[spot] = "";
      return move;
    });

    return moves.reduce((bestMove, move) => {
      if (
        (player === aiPlayer && move.score > bestMove.score) ||
        (player === huPlayer && move.score < bestMove.score)
      ) {
        return move;
      }
      return bestMove;
    });
  };

  const reset = () => {
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    titleRef.current.innerHTML = "Tic Tac Toe <span> Game </span>";
    document.querySelectorAll(".boxes").forEach((box) => {
      box.innerHTML = "";
    });
  };

  return (
    <div className=" bg-my-black m-0 p-0 h-screen w-screen">
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
              onClick={(e) => toggle(e, 0)}
              className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              id="0"
            ></div>
            <div
              onClick={(e) => toggle(e, 1)}
              className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              id="1"
            ></div>
            <div
              onClick={(e) => toggle(e, 2)}
              className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              id="2"
            ></div>
          </div>
          <div className="row1">
            <div
              onClick={(e) => toggle(e, 3)}
              className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              id="3"
            ></div>
            <div
              onClick={(e) => toggle(e, 4)}
              className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              id="4"
            ></div>
            <div
              onClick={(e) => toggle(e, 5)}
              className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              id="5"
            ></div>
          </div>
          <div className="row1">
            <div
              onClick={(e) => toggle(e, 6)}
              className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              id="6"
            ></div>
            <div
              onClick={(e) => toggle(e, 7)}
              className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              id="7"
            ></div>
            <div
              onClick={(e) => toggle(e, 8)}
              className="boxes flex h-[180px] w-[180px] bg-my-grey border-my-dark rounded-[12px] border-solid cursor-pointer m-1"
              id="8"
            ></div>
          </div>
        </div>
        <button
          onClick={reset}
          className="reset w-[100px] h-[50px] border-none outline-none cursor-pointer rounded-[50px] bg-my-teal text-my-grey font-robotomono font-bold mt-[25px] mb-[50px]"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default AI;
