/*
배열 A에는 0 ~ 1000사이의 숫자가 랜덤하게 들어있습니다.
이 숫자들이 2진수로 변환되었을 때 가지고 있는 1의 개수에 따라 오름차순 정렬하는 함수를 작성하세요.
단, 1의 개수가 같은 경우 숫자의 크기에 따라 오름차순 정렬을 합니다.
 
[입력]
0 ~ 1000사이의 숫자가 들어있는 배열 A
 
[출력]
주어진 조건에 따라 정렬된 배열
*/

/* 나의 원래 풀이
function compare(x, y) {
  x_cnt = x.match(/1/g).length;
  y_cnt = y.match(/1/g).length;
  if (x_cnt > y_cnt) return 1;
  if (x_cnt < y_cnt) return -1;
  if (x_cnt == y_cnt && parseInt(Number(x), 2) > parseInt(Number(y), 2))
    return 1;
  if (x_cnt == y_cnt && parseInt(Number(x), 2) < parseInt(Number(y), 2))
    return -1;
  if (x_cnt == y_cnt && parseInt(Number(x), 2) == parseInt(Number(y), 2))
    return -1;
}

function solution(A) {
  arr = [];
  for (let i = 0; i < A.length; i++) {
    arr.push(A[i].toString(2));
  }
  arr.sort(compare);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i], 2);
  }
  return arr;
}
*/

// 점수: 0.8/1.0
// 통과하지 못한 테스트케이스: 입력 [5, 7, 15, 0] -> 출력 [0, 5, 7, 15] (나의 출력: 런타임 에러)
// 0을 고려하지 못함..

// 수정한 풀이
function compare(x, y) {
  // x의 1의 개수를 x_cnt에 저장
  // 1이 하나도 없을 경우 x.match(/1/g)의 결과가 null이므로 length를 구할 수 없음
  // 따라서 1이 하나도 없을 경우를 따로 고려해야 함
  x_cnt = x.match(/1/g) ? x.match(/1/g).length : 0;
  // y의 1의 개수를 y_cnt에 저장 (1이 하나도 없을 경우를 따로 고려해야 함)
  y_cnt = y.match(/1/g) ? y.match(/1/g).length : 0;
  // 1의 개수에 따라 오름차순 정렬
  if (x_cnt != y_cnt) return x_cnt - y_cnt;
  // 1의 개수가 같을 경우 숫자의 크기에 다라 오름차순 정렬
  return parseInt(Number(x), 2) - parseInt(Number(y), 2);
}

function solution(A) {
  // 배열 A의 모든 요소를 2진수 문자로 바꿈
  A = A.map((item) => item.toString(2));
  // 배열 A를 compare 콜백함수를 기반으로 정렬
  A.sort(compare);
  // 정렬된 배열 A의 모든 요소를 10진수 정수로 바꿈
  A = A.map((item) => parseInt(item, 2));
  return A;
}
