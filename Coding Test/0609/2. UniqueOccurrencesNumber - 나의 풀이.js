/*
[문제 설명]
숫자 배열 arr가 주어집니다. arr에서 중복된 숫자의 개수가 유니크한지를 구하는 함수, solution을 완성해주세요.

예를 들어, arr [1, 3, 5, 4, 3, 1, 1] 의 경우
> 1은 3개가 존재하며,
> 3은 2개가 존재하며,
> 4는 1개가 존재하며,
> 5는 1개가 존재하므로
숫자 4와 5의 중복된 숫자의 개수가 유니크하지 않으므로 결과는 false 입니다.

[입력 형식]
- arr는 길이가 1 이상 100 이하의 배열입니다.
- arr의 요소는 1 이상 10 이하의 정수입니다.

[출력 형식]
- 중복된 숫자의 개수가 유니크한지를 구합니다.
*/

function solution(arr) {
  // 각 숫자가 중복된 횟수를 저장할 객체
  const numCntObj = {};
  // arr의 각 요소에 대해 해당 숫자가 이미 카운트 된 적이 있으면 카운트 1 증가
  // 카운트 된 적이 없으면 카운트를 1로 초기화
  arr.forEach((num) => (numCntObj[num] ? numCntObj[num]++ : (numCntObj[num] = 1)));
  // 각 숫자가 중복된 횟수 배열 -> 집합(중복 제거)
  const numCntSet = new Set(Object.values(numCntObj));
  // 등장한 숫자의 개수와 각 숫자가 중복된 횟수의 집합의 크기가 같으면 중복된 숫자의 개수가 유니크한 것
  return Object.keys(numCntObj).length === numCntSet.size;
}

// 점수: 1.0/1.0
