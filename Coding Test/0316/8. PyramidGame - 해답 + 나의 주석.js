/**
 * @param arr {number[][]}
 * @return {number}
 */

function solution(arr) {
  const dp = [];

  const n = arr.length;
  // 바닥층부터 꼭대기 층까지 거슬러 올라가면서 순회
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = [];
    // 각 층의 가장 오른쪽 방부터 가장 왼쪽 방까지 순회
    for (let j = i; j >= 0; j--) {
      // 바닥층일 경우 dp[i][j]를 arr[i][j]값으로 초기화
      if (i === n - 1) {
        dp[i][j] = arr[i][j];
        continue;
      }
      // 바닥층이 아닐 경우 dp[i][j]에
      // 현재 방의 보석의 수 + 왼쪽 아래/오른쪽 아래 방까지 오면서 얻을 수 있는 보석의 수 중 최댓값을 저장
      dp[i][j] = arr[i][j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
}

solution;
