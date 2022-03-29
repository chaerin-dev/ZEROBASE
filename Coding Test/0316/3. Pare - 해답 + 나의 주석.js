/*
민규와 지수는 구슬 맞추기 게임을 하려고 합니다.
게임의 방식은 숫자가 적힌 구슬이 한 쌍씩 들어있는 주머니가 있고,
술래는 주머니에서 상대가 알지 못하게 하나의 구슬을 빼내거나, 빼내지 않습니다.
그런 후 상대는 술래가 주머니에서 구슬을 빼냈는지 빼내지 않았는지,
그리고 술래가 구슬을 빼냈다면 빼낸 구슬의 숫자를 맞추는 게임입니다.
주머니 안에 들어있는 구슬에 적힌 숫자 배열 arr가 주어질 때,
술래가 빼낸 구슬의 번호를 출력하는 함수, solution을 완성해주세요.
*/

/**
 * @param arr {number[]}
 * @return {number}
 */

function solution(arr) {
  // 주머니에 남은 구슬이 짝수개이면 술래가 구슬을 가져가지 않은 것
  if (arr.length % 2 === 0) return 0;
  // 주머니에 남은 구슬이 홀수개이면 술래가 구슬을 가져간 것
  // 남은 구슬 중 짝이 없는 하나가 술래가 가져간 것과 같은 번호를 가진 구슬!
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
// 이런 특성을 이용하면 어떤 집단에서 짝이 없는 수를 골라낼 수 있다..!
