/*
[문제 설명]
 n개의 ASCII Code 배열 arr가 있습니다.
 ASCII Code를 문자열로 반환하는 함수, solution을 완성해주세요.

 예를 들어, arr [71, 111, 111, 103, 108, 101]가 있을 때,
 ASCII Code를 문자열로 치환한 결과는 'Goodle' 입니다.

[입력 형식]
 - arr는 길이가 100 이하의 배열입니다.
 - arr의 요소는 대/소문자의 ASCII Code로 구성되어 있습니다.

[출력 형식]
 - ASCII Code를 문자열로 반환합니다.
*/

function solution(arr) {
  let answer = "";
  // 배열의 모든 요소에 대해 ASCII Code를 문자열로 바꾼 후 answer에 더해줌
  arr.forEach((e) => (answer += String.fromCharCode(e)));
  return answer;
}

// 점수: 1.0/1.0
