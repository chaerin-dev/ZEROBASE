/*
문자열 S는 숫자와 4칙연산 기호로 이루어진 수식입니다.
해당 수식을 4칙연산 계산 순서에 맞춰 계산하는 함수를 작성하세요.
단, 소수점 자리는 2번째 자리까지 표현합니다.
 
[입력]
사칙 연산이 가능한 String 문자열
 
[출력]
소수점 2자리까지 표현된 사칙 연산 결과값
 
예를 들어, S가 “2*3+5/6*3+15” 인 경우 결과는 23.50 입니다.
*/

// String형의 x, y, operator가 주어졌을 때 사칙연산 계산 후 Number형으로 반환하는 함수
function calc(x, y, operator) {
  if (operator == "+") return Number(x) + Number(y);
  if (operator == "-") return Number(x) - Number(y);
  if (operator == "*") return Number(x) * Number(y);
  if (operator == "/") return Number(x) / Number(y);
}

function solution(S) {
  // 숫자와 연산자를 분리해서 저장할 배열
  s_arr = [];
  num = "";
  // 사칙 연산이 가능한 문자열 S를 한 문자씩 순회하며 반복
  for (let i = 0; i < S.length; i++) {
    // 연산자를 만나면
    if (S[i] == "+" || S[i] == "-" || S[i] == "*" || S[i] == "/") {
      // 이전까지의 숫자를 s_arr에 저장
      s_arr.push(num);
      // num은 초기화
      num = "";
      // 연산자도 s_arr에 저장
      s_arr.push(S[i]);
    }
    // 연산자가 아닌 숫자를 만나면 num 문자열에 해당 숫자 이어붙임
    else num += S[i];
    // 문자열의 마지막 인덱스에서는
    if (i == S.length - 1) {
      // 이전까지의 숫자를 s_arr에 저장
      s_arr.push(num);
    }
  }
  // 여기까지 숫자와 연산자를 분리해서 배열 s_arr에 저장 완료

  // s_arr에 "*"나 "/"이 남아있는 동안 계속 반복
  while (s_arr.includes("*") || s_arr.includes("/")) {
    // 최초의 "*" 또는 "/" 찾기
    for (let i = 0; i < s_arr.length; i++) {
      if (s_arr[i] == "*" || s_arr[i] == "/") {
        // 해당 연산자 직전의 수와 직후의 수를 연산자로 연산한 결과를 result에 저장
        result = calc(s_arr[i - 1], s_arr[i + 1], s_arr[i]);
        // 해당 연산자, 해당 연산자 직전의 수와 직수의 수를 s_arr에서 제거하고 이를 result로 대체
        s_arr.splice(i - 1, 3, result);
        break;
      }
    }
  }
  // 여기까지 모든 곱셈/나눗셈 계산 차례대로 완료

  // s_arr에 "+"나 "-"가 남아있는 동안 계속 반복
  while (s_arr.includes("+") || s_arr.includes("-")) {
    // 최초의 "+" 또는 "-" 찾기
    for (let i = 0; i < s_arr.length; i++) {
      if (s_arr[i] == "+" || s_arr[i] == "-") {
        // 해당 연산자 직전의 수와 직후의 수를 연산자로 연산한 결과를 result에 저장
        result = calc(s_arr[i - 1], s_arr[i + 1], s_arr[i]);
        // 해당 연산자, 해당 연산자 직전의 수와 직수의 수를 s_arr에서 제거하고 이를 result로 대체
        s_arr.splice(i - 1, 3, result);
        break;
      }
    }
  }
  // 여기까지 모든 덧셈/뺄셈 계산도 완료 후 s_arr에는 결과값만 남음

  // 결과를 소수점 이하 둘째자리까지 출력
  return Number(s_arr[0]).toFixed(2);
}

// 새로웠던 다른 사람의 풀이
function solution2(S) {
  return eval(S).toFixed(2);
}
// eval함수를 처음 알았는데, 사용하지 않는 것을 권장한다고 한다..
// 참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval

// 점수: 1.0/1.0
