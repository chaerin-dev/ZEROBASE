/*
[문제 설명]
일반적으로 사용하는 수식(ex. A + B * C)을 중위 표기법이라고 합니다.
 
연산자가 피연산자 사이에 들어있기 때문에 중위 표기법이라는 명칭을 사용합니다.
후위표기법은 연산자가 피연산자 뒤에 오는 것을 의미합니다. (ex. ABC*+)
 
컴퓨터는 계산식을 항상 순차대로 수행하기 때문에 연산식을 변환해서 처리해야합니다.
컴퓨터를 위해 중위표기법을 후위표기법으로 변환하는 함수를 작성하세요.
 
단, 연산자와 피연산자 사이에 공백이 한칸씩 주어지고,
출력 결과에도 모든 연산자와 피연산자 사이에 공백이 한칸씩 존재해야 합니다.
연산자로 사용되는 기호는 '(', ')', '+', '-', '*', '/'이며
나머지는 피연산자로 취급합니다.
 
[입력]
중위 표기법 수식이 표현된 문자열 S
 
[출력]
후위 표기법 문자열
*/

// 괄호 안의 내용을 처리하는 함수
function bracket(arr) {
  let end = arr.indexOf(")");
  let start = arr.lastIndexOf("(", end);
  let insideArr = arr.slice(start + 1, end);
  while (insideArr.includes("*") || insideArr.includes("/")) {
    insideArr = mul_div(insideArr);
  }
  while (insideArr.includes("+") || insideArr.includes("-")) {
    insideArr = add_sub(insideArr);
  }
  arr.splice(start, end - start, insideArr[0]);
  return arr;
}

// 곱셈과 나눗셈을 처리하는 함수
function mul_div(arr) {
  let where = Math.min(
    arr.indexOf("*") < 0 ? arr.length : arr.indexOf("*"),
    arr.indexOf("/") < 0 ? arr.length : arr.indexOf("/")
  );
  let str = arr[where - 1] + " " + arr[where + 1] + " " + arr[where];
  arr.splice(where - 1, 3, str);
  return arr;
}

// 덧셈과 뺄셈을 처리하는 함수
function add_sub(arr) {
  let where = Math.min(
    arr.indexOf("+") < 0 ? arr.length : arr.indexOf("+"),
    arr.indexOf("-") < 0 ? arr.length : arr.indexOf("-")
  );
  let str = arr[where - 1] + " " + arr[where + 1] + " " + arr[where];
  arr.splice(where - 1, 3, str);
  return arr;
}

function solution(S) {
  // S의 각 요소(숫자 or 연산자)를 배열 arr에 저장
  S = S.replace(/(\s*)/g, "");
  let temp = "";
  let arr = [];
  for (let i = 0; i < S.length; i++) {
    if (
      S[i] == "(" ||
      S[i] == ")" ||
      S[i] == "+" ||
      S[i] == "-" ||
      S[i] == "*" ||
      S[i] == "%"
    ) {
      if (temp.length) arr.push(temp);
      temp = "";
      arr.push(S[i]);
    } else {
      temp += S[i];
      if (i == S.length - 1) arr.push(temp);
    }
  }

  // 괄호 처리
  while (arr.includes(")")) {
    arr = bracket(arr);
    console.log(arr);
  }

  // 곱셈, 나눗셈 처리
  while (arr.includes("*") || arr.includes("/")) {
    arr = mul_div(arr);
  }

  // 덧셈, 뺄셈 처리
  while (arr.includes("+") || arr.includes("-")) {
    arr = add_sub(arr);
  }

  return arr[0];
}

// 점수: 1.0/1.0
