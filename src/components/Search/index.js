import React, { useState } from "react";
import searchIcon from "../../assets/images/search.svg";
import "./styles.css";

const Search = ({ onSearch }) => {
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="Search">
      <img src={searchIcon} alt="Search" />
      <input
        type="text"
        name="search"
        id="search"
        value={state}
        onChange={handleChange}
        placeholder="Ingresa el termino de búsqueda"
        title="Escribe nombre del personal o puesto"
      />
    </div>
  );
};

export default Search;
