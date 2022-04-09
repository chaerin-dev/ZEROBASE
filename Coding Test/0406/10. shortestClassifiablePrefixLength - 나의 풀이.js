/*
[문제 설명]
 문자열 n개가 주어집니다.
 이 각각의 문자열들을 유일하게 구분할 수 있는 접두어의 최소 길이를 구하는 함수,
 solution을 완성해주세요.
 예를 들어, 문자열의 배열 arr가 ['a', 'ab', 'def', 'dec', 'efgh'] 일 때,
 각각의 문자열을 유일하게 구분할 수 있는 접두어의 최소 길이는 3입니다.
 > 접두어의 길이가 1이면,
 ['a', 'a', 'd', 'd', 'e']로 유일하게 구분할 수 없습니다.
 > 접두어의 길이가 2이면,
 ['a', 'ab', 'de', 'de', 'ef']로 유일하게 구분할 수 없습니다.
 > 접두어의 길이가 3이면,
 ['a', 'ab', 'def', 'dec', 'efg']로 유일하게 구분할 수 있습니다.
 > 결과 3

[제한 사항]
 - 문자열의 배열 arr에는 중복된 문자열은 존재하지 않습니다.

[입력 형식]
 - arr는 길이가 1 이상 10,000 이하의 배열입니다.
 - arr의 각 요소는 길이가 1 이상 100 이하의 문자열이며, 알파벳 소문자로만 이루어져 있습니다.

[출력 형식]
 - 문자열들을 유일하게 구분할 수 있는 접두어의 최소 길이를 출력하세요.
*/

function solution(arr) {
  // 문자열들을 유일하게 구분할 수 있는 접두어의 최소 길이를 저장할 변수
  let result = 0;
  // 무한 loop
  while (true) {
    // 각 문자열을 1, 2, 3 ... 크기로 잘라가며 확인
    result++;
    // 각 문자열을 자른 결과를 저장할 Set
    let cutted = new Set();
    // arr의 각 요소에 대해
    for (let i = 0; i < arr.length; i++) {
      // result보다 길이가 작거나 같은 문자열은 그대로 cutted에 넣음
      if (arr[i].length <= result) cutted.add(arr[i]);
      // result보다 길이가 큰 문자열은 result 길이로 잘라서 cutted에 넣음
      else cutted.add(arr[i].slice(0, result));
    }
    // cutted 요소의 개수가 arr요소의 개수와 같으면 모든 문자열이 구분 가능하다는 것
    if (cutted.size == arr.length) break;
  }
  return result;
}

// 점수: 1.0/1.0
