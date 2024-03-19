import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "@/styles/searchBar.module.css";
export interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [name, setName] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://managemen-boards.onrender.com/${name}`
      );
      if (response.ok) {
        const data = await response.json();
        onSearch(data);
      } else {
        console.error("Board not found");
      }
    } catch (error) {
      console.error("Error searching for board:", error);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.column}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Enter the name of board..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button className={styles.searchButton} onClick={handleSearch}>
          Enter
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
