/*
[문제 설명]
문자열 배열 array와 문자열 s가 주어집니다.
이때, 문자열의 길이가 홀수인 array의 요소중에서 s의 접두사가 되는 개수를 출력하는 함수,
solution을 완성해주세요.

예를 들어, array ['app', 'ap', 'pa', 'appl']와 s 'apple'이 주어질 때,
일치하는 홀수 길이의 접두사는 'app' 1개입니다.

[입력 형식]
- array는 길이가 100 이하의 배열입니다.
- array의 요소는 길이가 1 이상 100 이하의 문자열입니다.
- array의 요소는 알파벳 소문자로 구성됩니다.
- s는 길이가 1 이상 100 이하의 문자열입니다.
- s는 알파벳 소문자로 구성됩니다.

[출력 형식]
- 길이가 홀수인 접두사의 개수를 출력합니
*/

function solution(array, s) {
  let answer = 0;
  array.forEach((e) => {
    if (e.length % 2 && s.startsWith(e)) answer++;
  });
  return answer;
}

// 점수: 1.0/1.0
