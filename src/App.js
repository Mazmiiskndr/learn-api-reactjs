// App.js
import React, { useState } from "react";
import SearchBar from "components/SearchBar";
import searchImages from "./api";
import ImageList from "components/ImageList";

export default function App() {
  const [images, setImages] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const handleSubmit = async (searchTerm, e) => {
    e.preventDefault();
    const results = await searchImages(searchTerm);
    setImages(results);

    if (results.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <SearchBar onSubmit={handleSubmit} />
      {notFound && (
        <p className="text-center text-red-500">Gambar tidak ditemukan.</p>
      )}
      <ImageList images={images} />
    </div>
  );
}
