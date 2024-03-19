"use client";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CreateBoardButton from "./components/CreateBoardButton";
import Board from "./components/Board";

export default function Home() {
  const [board, setBoard] = useState(null);

  const handleSearch = (data: React.SetStateAction<any>) => {
    setBoard(data);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CreateBoardButton onSearch={handleSearch} />
      {board && <Board board={board} />}
    </div>
  );
}
