// App.js
import React, { useState } from "react";
import SearchBar from "components/SearchBar";
import searchImages from "./api";
import ImageList from "components/ImageList";

export default function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (searchTerm, e) => {
    e.preventDefault();
    const results = await searchImages(searchTerm);
    setImages(results);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
