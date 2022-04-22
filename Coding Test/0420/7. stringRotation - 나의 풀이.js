/*
[문제 설명]
하나의 문자열에서 특정 지점을 쪼개 순서를 바꾸는 것을 문자열을 회전시켰다고 표현합니다.

예를들면 "HelloWorld" 라는 문자열에서 "Hello", "World"를 쪼개고 회전시키면
"WorldHello"라는 문자열이 됩니다.

S1과 S2 두가지 문자열이 주어졌을 때 S2가 S1을 회전시켜 나온 결과인지 판단하는 함수를 작성하세요.

[입력]
 문자열 S1, S2

[출력]
 문자열 S2가 S1의 회전에 의한 결과라면 1, 아니라면 0
*/

// string 문자열의 where 인덱스를 기준으로 순서를 바꾸는 함수
function rotate(string, where) {
  return string.slice(where + 1) + string.slice(0, where + 1);
}

function solution(S1, S2) {
  // S1 문자열의 모든 인덱스에 대해 rotate함수를 수행하다가
  for (let i = 0; i < S1.length - 1; i++) {
    // S2 문자열과 일치하는 순간 1 반환
    if (rotate(S1, i) === S2) return 1;
  }
  // S1와 일치하는 순간이 없으면 0 반환
  return 0;
}

// 점수: 1.0/1.0
