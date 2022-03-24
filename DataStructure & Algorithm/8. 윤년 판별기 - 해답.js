/*** 8. 윤년 판별기 ***/

/* user code */
function answer(year) {
  let result;

  if (year % 4 == 0 && year % 100 != 0) {
    result = true;
  } else if (year % 400 == 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  4,
  // TC: 2
  100,
  // TC: 3
  124,
  // TC: 4
  247,
  // TC: 5
  400,
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// 1. 4의 배수이고 100의 배수가 아닌 경우
// 2. 400의 배수인 경우
// 위의 두 가지 경우를 if - else if 문으로 나눠서 확인했다.
