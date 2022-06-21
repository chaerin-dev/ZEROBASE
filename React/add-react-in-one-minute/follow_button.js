// Step 3. FollowButton React 컴포넌트 생성
function FollowButton() {
  // Step 4. Follow Button 클릭 시마다 버튼 텍스트 변경(Follow <-> Following)
  // following이라는 변수를 선언하며 false로 초기화
  // following 변수의 값을 변경하려면 setFollowing 함수 사용
  const [following, setFollowing] = React.useState(false);

  // Step 5. 버튼 스타일 추가
  // following 변수의 상태에 따라 다른 스타일이 적용되도록 함
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
    backgroundColor: "black",
    color: "white",
  };
  const followingBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "white",
    color: "black",
    border: "1px solid grey",
  };

  return React.createElement(
    "div",
    {
      onClick: () => setFollowing(!following),
      style: following ? followingBtnStyle : followBtnStyle,
    },
    following ? "Following" : "Follow"
  );
}

// Step 1에서 HTML 페이지에 추가했던 div 태그 찾기
const domContainer = document.querySelector("#follow_button_container");
// 찾은 div 태그 안에 FollowButton React 컴포넌트 추가
ReactDOM.render(React.createElement(FollowButton), domContainer);
