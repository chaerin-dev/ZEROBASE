/*
[문제 설명]
N * N 크기의 배열에는 지뢰가 숨어져 있는 곳과 빈곳으로 구분되어 표현되어있습니다.
(지뢰 1, 빈공간 0)
이때 빈공간을 선택하면 해당 공간으로부터 8방향에 있는 지뢰의 개수가 표시됩니다.
 
주어진 배열에서 적절한 위치를 선택했을때
최대 몇개의 지뢰 개수가 표시되는지 리턴하는 함수를 작성하세요.
이때, 지뢰가 있는 곳은 선택할 수 없습니다.
 
[입력]
지뢰 정보가 표시된 2차원 배열 A
 
[출력]
8방향에 존재하는 최대 지뢰 개수
*/

// 해결 방법: 2차원 배열 A의 테두리에 0을 추가해 문제 간소화

function solution(A) {
  // 한 변의 길이
  let N = A.length;

  // 배열 각 행의 앞뒤에 0추가
  for (let i = 0; i < N; i++) {
    A[i].unshift(0);
    A[i].push(0);
  }
  // 배열의 맨 위와 맨 아래에 N+2개의 0으로 이루어진 행 추가
  A.unshift(Array.from({ length: N + 2 }, () => 0));
  A.push(Array.from({ length: N + 2 }, () => 0));

  // 주변 8방향에 있는 지뢰 개수의 최대값을 저장할 변수
  let answer = 0;
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      // 지뢰가 없는 곳에서
      if (A[i][j] === 0) {
        // 주변 8방향에 있는 지뢰 개수 추가
        let cnt =
          A[i - 1][j - 1] +
          A[i - 1][j] +
          A[i - 1][j + 1] +
          A[i][j - 1] +
          A[i][j + 1] +
          A[i + 1][j - 1] +
          A[i + 1][j] +
          A[i + 1][j + 1];
        // 주변 8방향에 있는 지뢰 개수의 최댓값 갱신
        answer = Math.max(cnt, answer);
      }
    }
  }
  return answer;
}

// 점수: 1.0/1.0
