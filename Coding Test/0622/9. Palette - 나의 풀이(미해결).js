/*
[문제 설명]
제로는 x축과 y축이 존재하는 2차원 평면에서 좌표가 주어지면 그 좌표를 색칠하라는 임무를 받았습니다.
좌표는 (x, y)의 형태로 주어지고 같은 좌표는 주어지지 않습니다.
두 개의 다른 좌표 사이의 거리는 𝑑(𝑖,𝑗) | 𝑥𝑖 − 𝑥𝑗 | − | 𝑦𝑖 − 𝑦𝑗 | 로 구할 수 있습니다.
각 좌표에서 제로는 1부터 n 사이로 대표되는 색을 선택하여서 색을 좌표에 칠해야 합니다.
다만 색칠하는 데에는 2가지 조건이 필요합니다.

첫 번째 조건은 세 좌표를 선택했을 때, 세 좌표의 색이 모두 같다면 모든 좌표 사이의 거리는 같아야 한다는 점입니다.
세 좌표가 (a, b, c)라고 할 때, d(a, b) = d(a, c) = d(b, c)의 조건을 만족해야 합니다.

또, 두 번째 조건은 세 좌표를 선택했을 때,
두 좌표의 색이 같고 나머지 한 좌표가 색이 다르다면 같은 두 좌표의 거리가 나머지 한 좌표와의 거리보다 작아야 한다는 점입니다.
이를 식으로 표현하면 d(a, b) < d(a, c) 그리고 d(a, b) < d(b, c)입니다. 여기서 a와 b가 같은 색으로 표현되고, c가 다른 색으로 표현됩니다.

좌표들이 배열로 주어지면, 여기에서 위 조건을 만족하는 경우의 수가 몇 개인지 반환해주세요.
만약 세 좌표의 색이 모두 다르거나, 주어진 전체 좌표가 두 개라면 조건을 만족할 필요는 없어서 가능한 색 조합을 모두 구해주시면 됩니다.
또한 결과를 998244353로 mod 연산하여 반환해주세요.

예를 들어, 좌표가 [[1,0], [3,0], [2,1]]으로 주어졌을 경우
색칠이 가능한 경우의 수는 [1, 1, 1], [2, 2, 2], [3, 3, 3], [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]으로 총 9가지입니다.

[제한 사항]
- 좌표의 개수는 2개 이상 100개 이하입니다. 또한 좌표들은 모두 다른 좌표를 가지고 있습니다.

[입력 형식]
- 좌표 maps이 주어집니다.

[출력 형식]
- 색칠할 수 있는 모든 경우의 수를 고려하여 반환해주세요. 또한 결과를 998244353로 mod 연산하여 반환해주세요.
*/

const getFactorial = function (n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
};

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};

const getDiff = function (a, b) {
  // 문제 식 오류?
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
};

function solution(maps) {
  const N = maps.length;

  if (N === 2) return 4;

  let answer = getFactorial(N);
  const combinations = getCombinations(maps, 3);
  combinations.forEach((combination) => {
    const [a, b, c] = [combination[0], combination[1], combination[2]];
    const [diff1, diff2, diff3] = [getDiff(a, b), getDiff(b, c), getDiff(c, a)];
    // console.log(a, b, c, diff1, diff2, diff3);
    // if (diff1 === diff2 && diff2 === diff3) answer += N * getFactorial(N-3);
    // else if (diff1 === diff2) answer += getFactorial(N);
    // else if (diff2 === diff3) answer += getFactorial(N);
  });

  return answer % 998244353;
}

// 점수: 0.2/1.0
