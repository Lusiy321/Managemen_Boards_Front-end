"use client";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CreateBoardButton from "./components/CreateBoardButton";
import Board from "./components/Board";

export default function Home() {
  const [boardId, setBoardId] = useState(null);

  const handleSearch = (id: React.SetStateAction<any>) => {
    setBoardId(id);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CreateBoardButton />
      {boardId && <Board boardId={boardId} />}
    </div>
  );
}
