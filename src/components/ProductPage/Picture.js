import React from "react";
import LikeButton from "../Like/LikeButton";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
        <LikeButton data={data} />
      </div>

      <a target="_blank" href={data.src.large}>
        <p className="product-title">{data.alt}</p>
      </a>

      <p className="product-description">{data.photographer}</p>
      <p className="product-price">NT${data.width}</p>
    </div>
  );
};

export default Picture;
