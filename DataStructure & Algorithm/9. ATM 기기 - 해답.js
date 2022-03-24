/*** 9. ATM 기기 ***/

/* user code */
function answer(withdraw, total) {
  let result;

  if (withdraw % 5 != 0) {
    result = total;
  } else if (withdraw + 0.5 > total) {
    result = total;
  } else {
    result = total - withdraw - 0.5;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [40, 130.0],
  // TC: 2
  [33, 130.0],
  // TC: 3
  [300, 300.0],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}

// 1. 인출하고자 하는 금액이 5의 배수인지
// 2. 잔액이 부족하지 않은지
// 위 두가지 조건을 if - else if 문으로 나눠서 확인했다.
