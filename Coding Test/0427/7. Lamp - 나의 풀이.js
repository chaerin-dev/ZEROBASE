/*
[문제 설명]
 r * c 크기의 온실에 식물을 키우고 있습니다.
 식물이 잘 자라도록 n * n만큼 커버가 가능한 램프를 설치하려고 합니다.
 r * c 크기의 field에 식물이 없는 경우 0으로, 식물이 있는 경우 1로 주어지고,
 램프의 크기 n이 주어질 때, 최대한 커버 가능한 식물의 수를 구하는 함수, solution을 완성해주세요.

 예를 들어, 3 x 3 크기의 온실[[1, 0, 1], [0, 0, 1], [0, 1, 1]]가 주어지고
 램프의 크기 2가 주어질 때, 최대한 커버 가능한 식물의 수는 3입니다.

[제한 사항]
 - 주어진 식물은 옮겨 심을 수 없습니다.

[입력 형식]
 - 온실의 식물 정보 field가 주어집니다.
 - field는 0과 1로 이루어진 r x c 크기의 2차원 배열입니다.
 - 온실의 크기 r과 c는 1 이상 100 이하의 정수입니다.
 - 램프의 크기 n이 주어집니다.
 - n은 1 이상 r과 c 이하의 정수입니다.

[출력 형식]
 - 램프로 최대한 커버 가능한 식물의 수를 출력합니다.
*/

// (x, y): 램프로 커버 가능한 곳 중 가장 왼쪽 위의 좌표
// (x, y)가 주어졌을 때 램프가 커버하는 식물의 수를 반환하는 함수
function coveredPlant(arr, x, y, n) {
  let cnt = 0;
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      cnt += arr[i][j];
    }
  }
  return cnt;
}

function solution(field, n) {
  let [r, c] = [field.length, field[0].length];
  let answer = 0;
  for (let i = 0; i <= r - n; i++) {
    for (let j = 0; j <= c - n; j++) {
      answer = Math.max(answer, coveredPlant(field, i, j, n));
    }
  }
  return answer;
}

// 점수: 1.0/1.0
