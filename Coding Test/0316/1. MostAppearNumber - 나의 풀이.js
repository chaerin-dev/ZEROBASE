/*
숫자로 이루어진 문자열 s가 있습니다
이 문자열에서 가장 많이 등장하는 수를 출력하는 함수, solution을 완성해주세요.
예를 들어, s가 '104001100'로 주어질 때, 가장 많이 등장하는 수는 0입니다.
*/

function solution(s) {
  // 각 문자가 몇 번 등장했는지 기록할 objejct
  let nums = {};
  // 문자열 s의 각 문자에 대해 반복
  for (let char of s) {
    // 한번도 등장하지 않은 문자면 등장횟수 1로 초기화
    if (!nums[char]) nums[char] = 1;
    // 한번이라도 등장했던 문자면 등장횟수 1 증가
    else nums[char]++;
  }

  // 등장횟수의 최댓값을 저장할 변수 max를 0으로 초기화 (등장횟수의 최솟값은 0이므로)
  let max = 0;
  // 등장횟수가 최대인 문자를 저장할 변수 answer
  let answer;
  // 객체의 key에 대해 반복
  for (let key in nums) {
    // 등장하는 수가 같을 경우 작은 수를 출력하므로 >=가 아닌 >
    if (nums[key] > max) {
      max = nums[key];
      answer = key;
    }
  }

  // 문자를 숫자로 형 변환
  return Number(answer);
}

// 점수: 1.0/1.0
