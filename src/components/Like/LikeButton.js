import { useContext, useState } from "react";

import { ReactComponent as LikeIcon } from "../../assets/heart-solid.svg";
import { ReactComponent as UnLikeIcon } from "../../assets/heart-solid.svg";
import LikeContext from "../../store/like-context";

const LikeButton = ({ data }) => {
  const likeCtx = useContext(LikeContext);
  const [like, setLike] = useState(false);
  // console.log(data);

  const setLikeHandler = () => {
    setLike(!like);
    likeCtx.items.push(data);
    console.log(likeCtx.items);
  };

  return (
    <button className="like-icon" onClick={setLikeHandler}>
      {like ? (
        <LikeIcon width="24px" fill="#E63349" />
      ) : (
        <UnLikeIcon width="24px" />
      )}
    </button>
  );
};

export default LikeButton;
