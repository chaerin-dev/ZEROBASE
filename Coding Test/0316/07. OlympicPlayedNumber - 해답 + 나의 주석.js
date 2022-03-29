/*
2020 도쿄 올림픽에 많은 육상 주자들이 참가했습니다.
각 국가에서 국가 대표 예선전이 진행되었습니다.
선발된 육상 주자들의 번호가 IOC에 전달되고 이를 기준으로 선수선발을 하려고 합니다.
선수 번호를 순서대로 정렬한 뒤에 `n번째` 순서의 선수 번호를 출력하는 함수,
solution을 완성해주세요.
*/

/**
 * @param arr {number[][]}
 * @param num {number}
 * @returns {number}
 */

function solution(arr, num) {
  // 2차원 배열인 arr의 각 요소를 합칠 1차원 배열 mergedArr 선언
  let mergedArr = [];
  // 각 국가의 선수 명단을 나타내는 arr의 각 요소(1차원 배열)를 mergedArr에 합침
  for (let i = 0; i < arr.length; i++) {
    mergedArr = [].concat(mergedArr, arr[i]);
  }
  // 1차원 배열 mergedArr를 오름차순으로 정렬
  mergedArr.sort((a, b) => a - b);
  // Num번째 선수의 번호를 반환(배열 mergedArr의 인덱스는 0부터 시작하므로 Num-1 인덱스의 값 반환)
  return mergedArr[num - 1];
}

solution;
