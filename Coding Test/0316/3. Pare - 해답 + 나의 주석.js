/**
 * @param arr {number[]}
 * @return {number}
 */

function solution(arr) {
  // 주머니에 남은 구슬이 짝수개이면 술래가 구슬을 가져가지 않은 것
  if (arr.length % 2 === 0) return 0;
  // 주머니에 남은 구슬이 홀수개이면 술래가 구슬을 가져간 것
  // 배열의 각 요소에 대해 콜백함수를 실행하는 .reduce() 메서드 사용
  return arr.reduce((pre, cur) => {
    pre ^= cur;
    return pre;
  }, 0);
}

solution();

// 비트연산자 XOR(^)에 대하여..
// 같은 두 수를 XOR하면 그 결과는 0이 된다.
// 0과 어떤 수 A를 XOR하면 그 결과는 A가 된다.
// 어떤 수 A에 어떤 수 B를 두 번 XOR하면 그 결과는 A가 된다.
// 이런 특성을 이용하면 짝이 없는 수를 골라낼 수 있다..!
