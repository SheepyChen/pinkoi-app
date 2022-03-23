import React from "react";
import Picture from "../ProductPage/Picture";
import { useContext } from "react";
import LikeContext from "../../store/like-context";

function LikePage() {
  const likeCtx = useContext(LikeContext);
  return (
    <div className="pictures">
      {likeCtx.items.map((d) => {
        // console.log(d);
        return <Picture data={d} />;
      })}
    </div>
  );
}

export default LikePage;
