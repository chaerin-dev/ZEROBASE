/* 13. 놀이기구 입장 제한 */

/* user code */
function answer(user) {
  let permit;

  permit = user.height >= 150;

  return permit;
}

/* main code */
let input = [
  // TC: 1
  { name: "john", age: 27, height: 181 },
  // TC: 2
  { name: "alice", age: 12, height: 148 },
  // TC: 3
  { name: "bob", age: 14, height: 156 },
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// if - else문 없이
// user.height >= 150 이라는 조건문의 결과(true/false)를 바로 변수 permit에 저장
