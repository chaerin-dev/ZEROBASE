/*
포화 이진 트리란, 리프 노드를 제외한 모든 노드가 2개의 자식 노드를 가지는 트리를 말합니다.
높이가 n인 포화 이진 트리의 노드 수를 구하려고 합니다.
예를 들어, 높이 n이 5인 포화 이진 트리의 노드 수는 31개입니다.
높이 n이 주어질 때, 트리의 모든 노드 개수를 출력하는 함수, solution을 완성해주세요.
결과값이 매우 클 수 있으니, 1,000,000,007로 나눈 나머지 값을 구해주세요.
*/

function solution(n) {
  // result: 2^0 + 2^1 + ... + 2^(n-1)
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += Math.pow(2, i) % 1000000007;
    result %= 1000000007;
  }
  return result % 1000000007;
}

// 점수: 0.8/1.0

// 통과하지 못한 테스트케이스: 입력 1000000 -> 출력 235042058 (나의 출력: NaN)
// Math.pow(2, 1000000)값이 이미 Infinity이기 때문에.. 이런 오류가 발생한 것!
// 2^1000000을 한번에 계산하면 안된다!
