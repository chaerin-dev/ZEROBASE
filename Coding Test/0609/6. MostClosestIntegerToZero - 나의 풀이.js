/*
[문제 설명]
숫자 배열 arr가 주어집니다. 이 중 0에서 가장 가까운 값을 구하는 함수, solution을 완성해주세요.

[제약 사항]
- 동일하게 가까운 수가 공존한다면 작은수를 출력합니다.

[입력 형식]
- arr는 길이가 1 이상 100 이하인 배열입니다.
- arr의 원소는 -100 이상 100 이하의 정수입니다.

[출력 형식]
- 0에서 가장 가까운 값을 구합니다.
*/

function solution(arr) {
  // 절대값이 작은 순으로 정렬하되, 절대값이 같은 경우 오름차순으로 정렬
  arr.sort((a, b) => {
    if (Math.abs(a) !== Math.abs(b)) return Math.abs(a) - Math.abs(b);
    else return a - b;
  });
  return arr[0];
}

// 점수: 1.0/1.0
