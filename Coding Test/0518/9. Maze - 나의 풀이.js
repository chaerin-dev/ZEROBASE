/*
[문제 설명]
M * N 크기의 배열에는 미로의 지도가 표시되어있습니다.
1이라고 표시된 부분은 지나갈수 있는 곳이며 0으로 표시된 곳은 갈수 없는 곳입니다.
0,0 이 출발 지점이고 M-1, N-1이 도착 지점일때 탈출 가능 여부를 판단하는 함수를 작성하세요.
이때 움직이는 방향은 동 서 남 북 4방향만 가능합니다.

[입력]
미로의 이동 가능 여부가 표시된 2차원 배열 A

[출력]
탈출 가능하면 1, 불가능하면 0
*/

function solution(A) {
  let row = A.length;
  let column = A[0].length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let queue = [[0, 0]];
  let visited = Array.from(Array(row), () => Array(column).fill(0));
  let x, y, nextX, nextY;

  while (queue.length) {
    x = queue[0][0];
    y = queue[0][1];
    visited[x][y] = 1;
    queue.shift();
    for (let i = 0; i < 4; i++) {
      nextX = x + dx[i];
      nextY = y + dy[i];
      if (
        nextX >= 0 &&
        nextY >= 0 &&
        nextX < row &&
        nextY < column &&
        A[nextX][nextY] === 1 &&
        visited[nextX][nextY] === 0
      )
        queue.push([nextX, nextY]);
    }
  }

  if (x == row - 1 && y == column - 1) return 1;
  else return 0;
}

// 점수: 1.0/1.0
