/*
[문제 설명]
 로마 숫자를 아라비안 숫자로 변환하려고 합니다. 로마 숫자는 I, V, X, L, C, D, X로 구성되어 있습니다.
 로마 숫자와 아라비안 숫자가 다음과 같이 매칭된다고 합니다.
 'I' = 1
 'V' = 5
 'X' = 10
 'L' = 50
 'C' = 100
 'D' = 500
 'M' = 1000

 2는 'II'로 나타내고, 3은 'III'로 나타냅니다. 하지만 4는 'IIII'가 아닌 'IV'로 5에서 1전의 수를 표현합니다.
 6은 'VI', 7은 'VII', 8은 'VIII' 그리고 9 또한 10의 1전으로 'IX'입니다.

 위와 같은 규칙을 통해 아래와 같습니다.
 > 'I'는 'V', 'X' 앞에 쓰여 각 4와 9를 표현합니다.
 > 'X'는 'L', 'C' 앞에 쓰여 각 40과 90을 표현합니다.
 > 'C'는 'D', 'M' 앞에 쓰여 각 400과 900을 표현합니다.

 로마 숫자 s가 주어질 때, 아라비안 숫자를 반환하는 함수, solution을 완성해주세요.
 예를 들어, 'XXVI'의 경우 26입니다.

[제한 사항]
 - 로마 숫자는 왼쪽에서 오른쪽으로 큰 수에서 작은 수 순서로 작성합니다.
 - 응답 값의 범위는 1 이상 3999 이하의 정수입니다.

[입력 형식]
 - s는 길이가 1 이상 15 이하인 문자열입니다.
 - s는 'I', 'V', 'X', 'L', 'C', 'D', 'M'으로 이루어져 있습니다.

[출력 형식]
 - 로마 숫자를 아라비안 숫자로 반환합니다.
*/

const romanHash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function solution(s) {
  let accumulator = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I" && s[i + 1] === "V") {
      accumulator += 4;
      i++;
    } else if (s[i] === "I" && s[i + 1] === "X") {
      accumulator += 9;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "L") {
      accumulator += 40;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "C") {
      accumulator += 90;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "D") {
      accumulator += 400;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "M") {
      accumulator += 900;
      i++;
    } else {
      accumulator += romanHash[s[i]];
    }
  }
  return accumulator;
}

// 점수: 1.0/1.0
