/*
2020 도쿄 올림픽에 많은 육상 주자들이 참가했습니다.
각 국가에서 국가 대표 예선전이 진행되었습니다.
선발된 육상 주자들의 번호가 IOC에 전달되고 이를 기준으로 선수선발을 하려고 합니다.
선수 번호를 순서대로 정렬한 뒤에 `n번째` 순서의 선수 번호를 출력하는 함수,
solution을 완성해주세요.
*/

// 숫자로 이루어진 배열의 오름차순 정렬을 위한 콜백함수
let ascending_order = function (x, y) {
  return x > y ? 1 : -1;
};

// 2차원 배열을 1차원으로 합친 후 정렬해서 Num번째 선수를 찾으면 됨
function solution(arr, Num) {
  // 0번째 국가의 선수 명단을 array라는 새로운 1차원 배열에 저장
  array = arr[0];
  // 나머지 국가들의 선수 명단을 array배열에 이어붙여줌
  for (let i = 1; i < arr.length; i++) {
    array = array.concat(arr[i]);
  }
  // 1차원 배열 array를 오름차순으로 정렬
  array.sort(ascending_order);
  // Num번째 선수의 번호를 반환(배열 array의 인덱스는 0부터 시작하므로 Num-1 인덱스의 값 반환)
  return array[Num - 1];
}

// 점수: 1.0/1.0
