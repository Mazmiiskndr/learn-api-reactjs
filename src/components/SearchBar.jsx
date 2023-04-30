// SearchBar.js
import React, { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm, e);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 flex items-center"
      >
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          style={{ width: "500px" }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
