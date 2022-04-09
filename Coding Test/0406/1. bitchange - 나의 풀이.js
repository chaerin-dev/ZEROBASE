/*
[문제 설명]
주어진 정수 A와 B를 2진수로 표현했을 때,
A를 B로 바꾸기 위하여 뒤집어야 하는 비트의 개수를 구하는 함수를 작성하세요.
 
[입력]
양의 정수 A, B
 
[출력]
A를 B로 바꾸기 위해 바뀌어야 하는 비트의 개수
*/

function solution(A, B) {
  // A와 B 중 이진수로 변환했을 때 길이가 더 짧은 것
  let minBinary = Math.min(A, B).toString(2);
  // A와 B 중 이진수로 변환했을 때 길이가 더 긴 것
  let maxBinary = Math.max(A, B).toString(2);
  // A와 B를 이진수로 변환했을 때 길이 차이
  let lengthDiff = maxBinary.length - minBinary.length;
  // 길이가 차이나는 부분: 다 바꿔줘야 함
  let result = lengthDiff;
  // 길이가 겹치는 부분: 일치하지 않을 경우 바꿔줘야 함
  for (let i = 0; i < minBinary.length; i++) {
    if (minBinary[i] !== maxBinary[i + lengthDiff]) result++;
  }
  return result;
}

// 점수: 1.0/1.0
