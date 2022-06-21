/*
[문제 설명]
문자열 계산식을 입력받는 계산기를 만들려고 합니다. 계산식은 덧셈(+), 뺄셈(-), 숫자로만 이루어져 있습니다.
계산식 s가 주어질 때, 계산식의 계산 결과를 출력하는 함수, solution을 완성해주세요.

예를 들어, s가 -3+26-7로 주어질 때, 계산식의 계산 결과는 16 (-3 + 26 -7)입니다.

[제한 사항]
계산식은 덧셈(+), 뺄셈(-), 숫자로만 이루어져 있습니다.

[입력 형식]
s는 길이가 1 이상 10 이하의 문자열입니다.

[출력 형식]
계산식의 계산 결과를 int 형식으로 출력합니다.
*/

function solution(s) {
  const numbers = [];

  s = "0" + s;
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "+" || s[i] === "-") {
      numbers.push(Number(temp));
      temp = "";
    }
    temp += s[i];
  }
  numbers.push(Number(temp));

  return numbers.reduce((acc, cur) => acc + cur, 0);
}

// 점수: 1.0/1.0
