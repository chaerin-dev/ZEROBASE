/*** 9. ATM 기기 ***/

/* user code */
function answer(withdraw, total) {
  let result;

  // 코드 구현 시작 영역
  let remain = total - withdraw - 0.5;
  // 정상적인 인출이 가능한 경우
  if (remain >= 0 && withdraw % 5 == 0) result = remain;
  // 정상적인 인출이 불가능한 경우(잔액이 부족하거나 인출하고싶은 금액이 5의 배수가 아닌 경우)
  else result = total;
  // 코드 구현 종료 영역

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
