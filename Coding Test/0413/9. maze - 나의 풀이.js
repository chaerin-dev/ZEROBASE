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

// 해결 방법: 너비 우선 탐색(DFS) 이용

function solution(A) {
  // 행/열의 갯수를 저장할 변수
  let row = A.length;
  let column = A[0].length;

  // 상/하/좌/우 이동을 위한 배열
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // DFS에 사용될 queue 역할을 할 이차원 배열
  let queue = [[0, 0]];

  // 방문했던 좌표 정보를 저장할 2차원 배열(0으로 초기화)
  let visited = Array.from(Array(row), () => Array(column).fill(0));

  // 현재 좌표: (x, y) / 다음에 이동할 좌표: (nextX, nextY)
  let x, y, nextX, nextY;

  // queue가 빌 때까지 반복
  while (queue.length) {
    // queue의 첫 번째 요소가 현재 좌표
    x = queue[0][0];
    y = queue[0][1];
    // 현재 좌표를 방문했음을 visited 배열에 저장
    visited[x][y] = 1;
    // queue의 첫 번째 요소 삭제
    queue.shift();
    // 상/하/좌/우 이동
    for (let i = 0; i < 4; i++) {
      nextX = x + dx[i];
      nextY = y + dy[i];

      // 다음에 이동할 좌표가 미로를 벗어나지 않으면서, 이동할 수 있는 구역이고, 아직 방문하지 않은 구역이라면
      if (
        nextX >= 0 &&
        nextY >= 0 &&
        nextX < row &&
        nextY < column &&
        A[nextX][nextY] === 1 &&
        visited[nextX][nextY] === 0
      ) {
        // queue에 해당 좌표 추가
        queue.push([nextX, nextY]);
      }
    }
  }

  // 모든 반복을 마쳤을 때 최종 위치가 도착 지점이면 탈출 가능한 미로
  if (x == row - 1 && y == column - 1) return 1;
  // 그렇지 않으면 탈출 불가능한 미로
  else return 0;
}

// 점수: 1.0/1.0
