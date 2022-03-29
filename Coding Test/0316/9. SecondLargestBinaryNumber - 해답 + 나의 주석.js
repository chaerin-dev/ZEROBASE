/**
 * @param n {number}
 * @returns {number}
 */

function solution(n) {
  // 결과를 저장할 변수 result
  let result = 0;
  // 1부터 n까지의 각 정수에 대해 getSecondLargestBitNumber의 결과를 result에 더해줌
  for (let i = 1; i <= n; i++) {
    result += getSecondLargestBitNumber(i);
  }
  return result;
}

// 정수 n의 두 번째 최상위 비트 자리의 수를 구하는 함수 getSecondLargestBitNumber
function getSecondLargestBitNumber(n) {
  // 1을 이진수로 표현한 뒤 왼쪽으로 30번 밀어낸 값을 변수 max의 초기값으로 설정
  // 즉, 이진수: 1000000000000000000000000000000, 십진수: 1073741824
  // 1 << 31부터는 overflow 발생!
  let max = 1 << 30;
  let count = 0;

  // max가 0이 되기 전까지 1을 한칸씩 오른쪽으로 이동
  // (1000000000000000000000000000000 다음은 100000000000000000000000000000 ...
  // ... 1000 다음은 100 다음은 10 다음은 1 의 순서로)
  for (; max > 0; max >>= 1) {
    // 비트 연산 &(AND)를 거치면 각 자리를 비교했을 때 둘 다 1인 경우에만 1을 반환
    // 즉, 둘 다 1인 비트가 있고
    if (max & n) {
      // 이미 이런 비트가 있었어서 이번이 두 번째로 둘 다 1인 빝의면
      if (count === 1) {
        // count값을 증가시키고
        count++;
        // for문의 다음 단계 실행
        continue;
      }
      // 처음으로 둘 다 1인 비트이거나 세번째 이상으로 둘 다 1인 비트이면 count값을 증가시키고
      count++;
      // n의 최상위 비트를 0으로 만들어줌
      n -= max;
    }
  }

  return n;
}

console.log(solution(7));

// Ex. n이 7(이진수로 111)일 경우
// max는 이진수로 1000000000000000000000000000000,
// => n(이진수로 111)과 비트 연산 &(AND)을 했을 때 둘 다 1인 비트가 없으므로 0 반환 => 아무일도 일어나지 않음
// max는 이진수로 100000000000000000000000000000,
// => n(이진수로 111)과 비트 연산 &(AND)을 했을 때 둘 다 1인 비트가 없으므로 0 반환 => 아무일도 일어나지 않음
// .. 이 과정 반복 ...
// max는 이진수로 100,
// => n(이진수로 111)과 비트 연산 &(AND)을 했을 때 둘 다 1인 비트가 있으므로 1 반환
// => count값이 1 증가해서 1이 되고 n(이진수로 111)에서 max(이진수로 100)를 빼면 n은 이진수로 11이 됨
// max는 이진수로 10,
// => n(이진수로 11)과 비트 연산 &(AND)을 했을 때 둘 다 1인 비트가 있으므로 1 반환
// => count값이 1이므로 1 증가해서 2가 되고 continue;에 의해 for문의 다음 단계 진행
// max는 이진수로 1,
// => n(이진수로 11)과 비트 연산 &(AND)을 했을 때 둘 다 1인 비트가 있으므로 1 반환
// => count값이 2이므로 1 증가해서 3이 되고 n(이진수로 11)에서 max(이진수로 1)를 빼면 n은 이진수로 10이 됨
// !!!이렇게 나온 결과값 n(2)이 바로 원래 n(7)의 두 번째 최상위 비트 자리의 수!!!
// 즉, n을 이진수로 표현했을 때, 두 번째 최상위 비트의 1을 제외하고 모두 0으로 바꾸는 방법!

// Ex. n이 8(이진수로 100)일 경우
// max는 이진수로 1000000000000000000000000000000,
// => n(이진수로 100)과 비트 연산 &(AND)을 했을 때 둘 다 1인 비트가 없으므로 0 반환 => 아무일도 일어나지 않음
// max는 이진수로 100000000000000000000000000000,
// => n(이진수로 100)과 비트 연산 &(AND)을 했을 때 둘 다 1인 비트가 없으므로 0 반환 => 아무일도 일어나지 않음
// .. 이 과정 반복 ...
// max는 이진수로 100,
// => n(이진수로 100)과 비트 연산 &(AND)을 했을 때 둘 다 1인 비트가 있으므로 1 반환
// => count값이 1 증가해서 1이 되고 n(이진수로 100)에서 max(이진수로 100)를 빼면 n은 이진수로 0이 됨
// !!!두 번째 최상위 비트가 없을 때는 이렇게 나온 결과값 n(0)이 반환됨!!!
