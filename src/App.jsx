import React, { useState } from "react";
import TicTacToe from "./Components/TicTacToe";
import AI from "./Components/AI";
import Switch from "./Components/Switch";

export default function App() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <main>
      <section>
        <Switch isSelected={isSelected} setIsSelected={setIsSelected} />
        {isSelected ? <AI /> : <TicTacToe />}
      </section>
    </main>
  );
}
