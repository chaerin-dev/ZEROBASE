/*
[문제 설명]
배열 A에는 0보다 큰 숫자가 N개 들어있습니다.
모든 숫자를 아우르는 최대 공약수를 구하는 함수를 작성하세요.

[입력]
0보다 큰 정수가 들어있는 배열 A
 
[출력]
배열 A의 모든 정수를 아우르는 최대 공약수
*/

// 두 수 x, y의 최대 공약수를 구하는 함수
function gcd(x, y) {
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
}

function solution(A) {
  // 배열 A의 첫 번째 요소와 두 번째 요소의 최대 공약수를 변수 answer에 저장
  let answer = gcd(A[0], A[1]);
  // 배열 A의 세 번째 요소부터 마지막 요소 까지
  for (let i = 2; i < A.length; i++) {
    // 이전 값들의 최대 공약수와 해당 요소의 최대 공약수를 구해서 변수 answer 갱신
    answer = gcd(answer, A[i]);
  }
  return answer;
}

// 점수: 1.0/1.0
