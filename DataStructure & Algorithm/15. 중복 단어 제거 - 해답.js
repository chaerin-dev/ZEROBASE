/* 15. 중복 단어 제거 */

/* user code */
function answer(arr) {
  let new_arr = [];

  new_arr = Array.from(new Set(arr));

  return new_arr;
}

/* main code */
let input = [
  // TC: 1
  ["john", "alice", "alice"],
  // TC: 2
  ["Hello", "hello", "HELLO", "hello"],
  // TC: 3
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// 유사배열객체나 반복가능객체를 '얕은복사'하여
// 새로운 배열을 만드는 Array.from() 메서드를 사용했다.
