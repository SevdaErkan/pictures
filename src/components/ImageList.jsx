import React from "react";
import "./imageList.css";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  console.log(images);
  return (
    <section>
      {images.map((image) => (
        <ImageCard {...image} />
      ))}
    </section>
  );
};
export default ImageList;
