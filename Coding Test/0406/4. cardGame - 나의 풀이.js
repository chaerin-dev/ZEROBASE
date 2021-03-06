/*
[문제 설명]
0 ~ 100까지의 숫자가 적혀있는 카드가 있습니다.
해당 카드를 뽑은 순서에 따라 아래 규칙에 의거해 점수를 책정합니다.
 
1. 뽑은 카드의 숫자와 현재 까지 뽑은 카드의 수를 곱한다.
2. 짝수번째로 뽑은 카드의 경우 -1을 더 곱한다.
 
배열 A에 뽑은 카드의 리스트가 제공될때
해당 카드들이 규칙에 따라 나올수 있는 가장 큰 점수가 몇점인지 구하는 함수를 작성하세요.
 
[입력]
카드 리스트 배열 A
 
[출력]
규칙에 의거해서 나올수 있는 최대 점수
*/

/* 
[접근 방법]
- 홀수번째: 현재까지 뽑은 카드의 수 * 뽑은 카드의 수, 즉 양수를 더해줌
- 짝수번째: 현재까지 뽑은 카드의 수 * 뽑은 카드의 수 * (-1), 즉 음수를 더해줌
=> 즉, 홀수번째에는 큰 수가 나올수록, 짝수번째에는 작은 수가 나올수록 유리
=> 또, 홀수번째에는 뒤로 갈 수록 큰 수가 나와야 하고,
=> 짝수번째에는 뒤로 갈수록 작은 수가 나와야 함

[예]
Ex 1(카드가 짝수개인 경우). 1, 2, 3, 4, 5, 6 이라는 카드를 뽑았다면
=> 4, 3, 5, 2, 6, 1 순서로 뽑을 때 가장 큰 점수가 나옴
Ex 2(카드가 홀수개인 경우). 1, 2, 3, 4, 5 라는 카드를 뽑았다면
=> 3, 2, 4, 1, 5 순서로 뽑을 때 가장 큰 점수가 나옴
*/

function solution(A) {
  // 배열 A를 내림차순으로 정렬
  A.sort((a, b) => b - a);
  let half = Math.ceil(A.length / 2);
  let result = 0;
  let mul = 0;
  // 카드가 짝수개인 경우, mul = 홀수 번째 카드에 곱해줄 수
  if (A.length % 2 == 0) mul = A.length - 1;
  // 카드가 홀수개인 경우, mul = 홀수 번째 카드에 곱해줄 수
  else mul = A.length;
  for (let i = 0; i < half; i++) {
    result += A[i] * mul;
    mul -= 2;
  }
  // 카드가 짝수개인 경우, mul = 짝수 번째 카드에 곱해줄 수
  if (A.length % 2 == 0) mul = A.length * -1;
  // 카드가 짝수개인 경우, mul = 짝수 번째 카드에 곱해줄 수
  else mul = (A.length - 1) * -1;
  for (let i = A.length - 1; i >= half; i--) {
    result += A[i] * mul;
    mul += 2;
  }
  return result;
}

// 점수: 1.0/1.0

// 코딩테스트 이후 새로 풀어본 풀이
function solution2(A) {
  // 배열 A를 오름차순으로 정렬
  A.sort((a, b) => a - b);
  let result = 0;
  // mul: 각 카드에 곱해줄 수
  let mul = 0;
  // 카드가 짝수개인 경우
  if (A.length % 2 == 0) mul = -1 * A.length;
  // 카드가 홀수개인 경우
  else mul = -1 * (A.length - 1);
  for (let i = 0; i < A.length; i++) {
    result += A[i] * mul;
    mul += 2;
    if (mul == 0) mul = 1;
  }
  return result;
}
