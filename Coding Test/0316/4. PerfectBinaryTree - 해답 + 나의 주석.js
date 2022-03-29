/**
 * @param n {number}
 * @returns {number}
 */

function solution(n) {
  const MOD = 1_000_000_007;
  let result = 1;
  // result에 2를 n번 반복해서 곱해주되, 매번 MOD로 결과값을 나눠줌
  // 2^n을 **연산자나 Math.pow 메서드를 사용하지 않고 반복문으로 구하는 이유?
  // => n이 충분히 큰 수일 경우 2^n값 자체에서 overflow가 발생할 수 있음
  // 모든 연산을 마친 뒤 한번에 MOD로 나눠주지 않고 2를 곱할 때마다 MOD로 나눠주는 이유?
  // => n이 충분히 큰 수일 경우 연산과정 중에 overflow가 발생할 수 있음
  for (let i = 1; i <= n; i++) {
    result *= 2;
    result %= MOD;
  }
  // 2^n - 1을 반환
  return result - 1;
}

// 2^0 + 2^1 + ... + 2^(n-1) = 2^n - 1이라는 사실을 이용
// overflow를 막기 위해 2^n을 구할 때에 한번에 구하지 않고
// 2를 곱하는 과정을 n번 반복하며 매번 MOD로 나누어줌!!
