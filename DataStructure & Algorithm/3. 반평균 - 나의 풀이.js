/*** 3. 반 평균 ***/

/* user code */
function answer(score) {
  let average = 0;

  // 코드 구현 시작 영역
  let sum = 0;
  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  average = sum / score.length;
  average = average.toFixed(2); // 반올림해서 소수점 이하 둘째자리까지 표현
  // 코드 구현 종료 영역

  return average;
}

/* main code */
let input = [
  // TC: 1
  [80, 95, 65, 70, 100],
  // TC: 2
  [82, 77, 51, 64, 73, 90, 80],
  // TC: 3
  [100, 71, 59, 88, 72, 75, 91, 93],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
