// components/ImageList.js
import React from "react";
import ImageShow from "./ImageShow";

/**
 * This is a functional component that renders a grid of images using the props passed to it.
 * @returns A React component that renders a grid of images using the `ImageShow` component for each
 * image in the `images` array passed as a prop. The grid has 4 columns and a gap of 4. The `ImageShow`
 * component is passed the `image` object as a prop and a unique `key` prop based on the `id` property
 * of the `image` object.
 */
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
