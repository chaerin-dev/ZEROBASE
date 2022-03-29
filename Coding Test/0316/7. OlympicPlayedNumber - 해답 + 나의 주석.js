/**
 * @param arr {number[][]}
 * @param num {number}
 * @returns {number}
 */

function solution(arr, num) {
  // 2차원 배열인 arr의 각 요소를 합칠 1차원 배열 선언
  let mergedArr = [];
  // 각 국가의 선수 명단을 나타내는 arr의 각 요소를 mergedArr에 합침
  for (let i = 0; i < arr.length; i++) {
    mergedArr = [].concat(mergedArr, arr[i]);
  }
  // 1차원 배열 mergedArr를 오름차순으로 정렬
  mergedArr.sort((a, b) => a - b);
  // Num번째 선수의 번호를 반환(배열 mergedArr의 인덱스는 0부터 시작하므로 Num-1 인덱스의 값 반환)
  return mergedArr[num - 1];
}

solution;
