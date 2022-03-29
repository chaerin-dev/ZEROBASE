/**
 * @param s {string}
 * @return {number}
 */

function solution(s) {
  // 각 숫자가 몇 번 등장했는지 기록할 크기 10의 배열 numsCount의 모든 값을 0으로 초기화
  const numsCount = new Array(10).fill(0);

  for (let i = 0; i < s.length; i++) {
    // 문자열 s의 각 문자를 변수 c에 저장
    const c = s.charAt(i);
    // 문자 c를 숫자로 형 변환해서 변수 num에 저장
    const num = Number(c);
    // 해당 문자의 등장 횟수를 1 증가시킴
    numsCount[num] += 1;
  }
  // 배열 numsCount에서 등장 횟수가 가장 큰 요소의 인덱스를 반환
  return mostAppearNum(numsCount);
}

// 배열 numsCount에서 값이 가장 큰 요소의 인덱스를 반환하는 함수 mostAppearNum
function mostAppearNum(numsCount) {
  // 값이 가장 큰 요소의 인덱스를 저장할 변수 ret를 -1로 초기화
  let ret = -1;
  // 최댓값을 저장할 변수 cnt를 0으로 초기화
  let cnt = 0;

  // 배열 numsCount의 모든 요소에 대해 반복
  for (let i = 0; i < 10; i++) {
    // 변수 ret과 cnt를 함께 갱신
    // (등장하는 수가 같을 경우 작은 수를 출력하므로 <=가 아닌 <)
    if (cnt < numsCount[i]) {
      ret = i;
      cnt = numsCount[i];
    }
  }

  // 값이 최대인 요소의 인덱스를 반환
  return ret;
}

solution;
