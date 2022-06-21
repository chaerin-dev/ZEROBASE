import React from "react";

function FollowButton() {
  const [following, setFollowing] = React.useState(false);
  const commonBtnStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "20px",
    right: "20px",
    width: "150px",
    height: "50px",
    borderRadius: "9999px",
    fontWeight: "bold",
    cursor: "pointer",
  };
  const followBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "cornflowerblue",
    color: "white",
  };
  const followingBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "white",
    color: "cornflowerblue",
    border: "1px solid cornflowerblue",
  };

  // JSX 형식
  return (
    <div
      onClick={() => setFollowing(!following)}
      style={following ? followingBtnStyle : followBtnStyle}
    >
      {following ? "Following" : "Follow"}
    </div>
  );
}

export default FollowButton;
