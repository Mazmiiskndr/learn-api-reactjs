// components/ImageList.js
import React from "react";
import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-20">
      {images.map((image) => (
        <ImageShow key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
