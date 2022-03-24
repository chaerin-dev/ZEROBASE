/* 18. 배열 회전 */

/* user code */
function answer(user) {
  let reverse = [];

  let tmp;
  for (let i = 0; i < user.length / 2; i++) {
    tmp = user[i];
    user[i] = user[user.length - 1 - i];
    user[user.length - 1 - i] = tmp;
  }
  reverse = user;

  return reverse;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 3, 4],
  // TC: 2
  [-1, 6, "hello", -15],
  // TC: 3
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// 앞에서부터 절반(홀수일 경우 절반 직전)까지만 배열을 돌면서
// 대칭한 곳에 있는 값과 자리를 바꿔주었다.
