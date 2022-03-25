/**
 * @param n {number}
 * @returns {number}
 */

function solution(n) {
  const MOD = 1_000_000_007;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= 2;
    result %= MOD;
  }
  return result - 1;
}

console.log(solution(5));

// 2^0 + 2^1 + ... + 2^(n-1) = 2^n - 1이라는 사실을 이용
// 2^n을 구할 때에 한번에 구하지 않고,
// 2를 곱하는 과정을 n번 반복하며 매번 MOD로 나누어줌!!
