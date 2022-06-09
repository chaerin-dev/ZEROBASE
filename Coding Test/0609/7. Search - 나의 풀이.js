/*
[문제 설명]
1과 0으로 이루어진 2차원 배열이 주어지면, 1으로 연결되어 있는 부분을 찾아야 합니다.
상하좌우가 모두 0으로 이루어져 있다면, 분리되어 있는 곳으로 판단할 수 있습니다.
1으로 이루어진 구역의 개수를 측정해서 반환해주세요.

예를 들어,

grid = [
["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

와 같은 배열이 주어진다면, 1로 구분되는 3개의 구역이 존재하는 것입니다.
고로 3을 결과값으로 반환해주시면 됩니다.

[제한 사항]
- array의 크기는 1 * 1 이상 300 * 300 이하입니다.
- array 안에는 항상 0 또는 1이 포함되어 있습니다.

[입력 형식]
- 2차원 배열 grid가 주어집니다.

[출력 형식]
- 1으로 구분되는 구역의 개수를 세서 반환해주세요.
*/

function solution(grid) {
  // 행/열의 갯수를 저장할 변수
  const [row, column] = [grid.length, grid[0].length];

  // 상/하/좌/우 이동을 위한 배열
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // DFS
  function DFS(i, j) {
    // DFS에 사용될 queue 역할을 할 이차원 배열
    let queue = [[i, j]];
    // 현재 좌표: (x, y) / 다음에 이동할 좌표: (nextX, nextY)
    let x, y, nextX, nextY;
    // queue가 빌 때까지 반복
    while (queue.length) {
      // queue의 첫 번째 요소가 현재 좌표
      [x, y] = [queue[0][0], queue[0][1]];
      // 현재 좌표를 방문했음을 표시
      grid[x][y] = "X";
      // queue의 첫 번째 요소 삭제
      queue.shift();
      // 상/하/좌/우 이동
      for (let i = 0; i < 4; i++) {
        nextX = x + dx[i];
        nextY = y + dy[i];
        // 다음에 이동할 좌표가 범위를 벗어나지 않으면서, 섬이고, 아직 방문하지 않은 구역이라면
        if (
          nextX >= 0 &&
          nextY >= 0 &&
          nextX < row &&
          nextY < column &&
          grid[nextX][nextY] === "1"
        ) {
          // queue에 해당 좌표 추가
          queue.push([nextX, nextY]);
        }
      }
    }
  }

  // 섬의 개수를 저장할 변수
  let answer = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === "1") {
        DFS(i, j);
        answer++;
      }
    }
  }

  return answer;
}

// 점수: 1.0/1.0
