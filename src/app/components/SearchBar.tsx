import React, { useState } from "react";
import styles from "@/styles/searchBar.module.css";
import GetBoardCardButton from "./GetCardButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [name, setName] = useState("");

  const handleSearch = async () => {
    try {
      if (name !== "") {
        const response = await fetch(
          `https://managemen-boards.onrender.com/${name}`
        );
        console.log(response);
        if (response.ok) {
          const data = await response.json();

          onSearch(data);
          setName("");
        } else {
          setName("");
          toast.error("Board not found");
        }
      } else {
        setName("");
      }
    } catch (error: any) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <ToastContainer />
      <div className={styles.column}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Enter the name of board..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          Enter
        </button>
        <GetBoardCardButton onSearch={onSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
