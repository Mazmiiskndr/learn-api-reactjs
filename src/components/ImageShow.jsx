// components/ImageShow.js
import React from "react";

const ImageShow = ({ image }) => {
  return (
    <div className="shadow-md rounded overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <img
        className="w-full h-auto"
        src={image.urls.small}
        alt={image.description}
      />
      <div className="p-4">
        <p className="text-gray-700">{image.description || "No description"}</p>
      </div>
    </div>
  );
};

export default ImageShow;
