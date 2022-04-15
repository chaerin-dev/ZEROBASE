/*
[문제 설명]
-10000 ~ 10000 사이의 숫자 N과 1 ~ 9 사이의 숫자 K가 주어집니다.
K를 N의 특정 자리에 넣어서 만들수 있는 숫자들 중 최대값을 구하는 함수를 작성하세요.
 
[입력]
-10000 ~ 10000 사이의 정수 N, 1 ~ 9 사이의 정수 K
 
[출력]
주어진 조건에 만족하는 정수
*/

// N이 음수이면 큰 숫자가 뒤로 갈수록 N값이 커짐
// N이 양수이면 큰 숫자가 앞으로 올수록 N값이 커짐
function solution(N, K) {
  // 정수 N을 문자열로 변환
  let strN = String(N);
  // 결과를 저장할 변수
  let answer = "";

  // N이 양수이면
  if (N >= 0) {
    // 문자열의 각 문자를 순회하다가
    for (let i = 0; i < strN.length; i++) {
      // K보다 작은 수가 나오면
      if (strN[i] < K) {
        // 그 수 앞에 K를 집어넣은 문자열을 answer에 저장
        answer = strN.replace(strN[i], String(K) + strN[i]);
        break;
      }
    }
  }

  // N이 음수이면
  else {
    // 문자열의 각 문자를 순회하다가(맨 앞 문자는 -이므로 인덱스 1부터 순회)
    for (let i = 1; i < strN.length; i++) {
      // K보다 큰 수가 나오면
      if (strN[i] > K) {
        // 그 수 앞에 K를 집어넣은 문자열을 answer에 저장
        answer = strN.replace(strN[i], String(K) + strN[i]);
        break;
      }
    }
  }

  return parseInt(answer);
}

// 점수: 1.0/1.0
