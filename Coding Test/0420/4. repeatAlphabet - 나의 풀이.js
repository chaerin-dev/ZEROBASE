/*
[문제 설명]
S는 알파벳으로 이루어진 문자열 입니다.
해당 문자열에서 2회 이상 연속해서 나오는 알파벳을 소거 합니다.
소거한 뒤에 나온 문자열에서 다시 연속해서 나오는 알파벳을 소거하는 작업을
더이상 작업할 것이 없을 때 까지 반복합니다.
이때 최종 문자열이 완전히 소거되어 빈 문자열이라면 1을 리턴하고
알파벳이 남아있으면 0을 리턴하는 함수를 작성하세요.

[입력]
 문자열 S

[출력]
 조건 수행후 문자열이 비어있다면 1, 남아있다면 0
*/

function solution(S) {
  // 연속된 알파벳을 의미하는 정규식
  const regexp = new RegExp(/([a-zA-Z])\1{1,}/);

  while (true) {
    // 문자열에 위 정규식이 포함되면
    if (regexp.test(S)) {
      // 해당 정규식을 제거(빈 문자열로 치환)
      S = S.replace(regexp, "");
    }
    // 문자열에 위 정규식이 포함되지 않을 때까지 반복
    else {
      break;
    }
  }

  // 최종 문자열이 빈 문자열이 아니면 0 반환, 빈 문자열이면 1 반환
  return S.length ? 0 : 1;
}

// 점수: 1.0/1.0

function solution2(S) {
  arr = S.split("");
  let flag = true;
  while (flag) {
    flag = true;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (S[i] !== S[j]) {
          if (j - i > 1) {
            arr.splice(i, j - i);
            flag = false;
          } else break;
        }
      }
    }
  }
  if (arr.length === 0) return 1;
  return 0;
}

console.log(solution2("ABBA"));
console.log(solution2("ACA"));
console.log(solution2("ACACA"));
console.log(solution2("ACAACABB"));
console.log(solution2("ACADDFFACABB"));

console.log(solution2("AABBA"));
