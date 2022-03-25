/*
문자열에 연속한 2개의 같은 문자가 존재하지 않도록 만들고 싶습니다.
연속한 2개의 같은 문자가 존재한다면 이 문자를 지우고 남은 문자열을 이어 붙입니다.
이 과정을 연속한 2개의 같은 문자가 없을 때까지 반복하면 목표한 문자열을 얻게 됩니다.
문자열 s가 주어질 때, 위와 같은 과정을 적용해서 나오는 문자열을 출력하는 함수,
solution을 완성해주세요.
*/

function solution(s) {
  // 무한반복 loop
  while (true) {
    // 한 번의 loop를 끝까지 수행했을 때, done_flag가 true 상태로 남아있으면 반복문을 탈출!
    let done_flag = true;
    // 문자열의 각 문자에 대해서 (마지막 문자 제외)
    for (let i = 0; i < s.length - 1; i++) {
      // 해당 문자가 다음 문자와 일치하면
      if (s[i] == s[i + 1]) {
        // 연속되는 두 문자를 이어붙이 문자열을 ""(공백)으로 대체
        s = s.replace(s[i] + s[i], "");
        // 연속되는 문자가 있었으므로 done_flag를 false 상태로 바꿔서
        // while loop를 한 번 더 진행
        done_flag = false;
      }
    }
    // done_flag가 true 상태로 남아있으면 더이상 연속되는 문자가 없다는 뜻이므로 반복문을 탈출!
    if (done_flag) return s;
  }
}

// 점수: 1.0/1.0
