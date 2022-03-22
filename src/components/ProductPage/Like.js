import { ReactComponent as HeartIcon } from "../../assets/heart-regular.svg";
import React, { useState } from "react";

const Like = () => {
  let [like, setLike] = useState(false);
  const setLikeChangeHandler = () => {
    setLike(!like);
  };
  return (
    <div
      className="like-icon"
      onClick={setLikeChangeHandler}
      style={{ fill: like ? "red" : "black" }}
    >
      <HeartIcon />
    </div>
  );
};

export default Like;
