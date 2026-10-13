import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        backgroundColor: liked ? "#ff4d4d" : "#e0e0e0",
        color: liked ? "#fff" : "#000",
      }}
      className="toggleLikeBtn"
    >
      {liked ? "Liked" : "Like"}
    </button>
  );
}

export default LikeButton;
