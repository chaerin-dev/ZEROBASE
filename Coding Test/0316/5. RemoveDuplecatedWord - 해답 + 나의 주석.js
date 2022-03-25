/**
 * @param s {string}
 * @returns {string}
 */

function solution(s) {
  // stack의 역할을 할 배열
  const stack = [];
  // 문자열의 각 문자에 대해 반복
  for (const c of s) {
    // stack이 비어있지 않으면서 stack에 마지막으로 저장된 문자가 현재 고려하는 문자와 일치하면
    if (stack.length && stack[stack.length - 1] === c) {
      // stack에 마지막으로 저장된 문자(연달아서 등장하는 문자) 제거
      stack.pop();
    }
    // stack이 비어있거나 stack에 마지막으로 저장된 문자가 현재 고려하는 문자와 일치하지 않으면
    else {
      // stack에 현재 고려하는 문자 push
      stack.push(c);
    }
  }

  // 위 과정을 통해 연속한 2개의 같은 문자는 모두 제거된다.
  // Ex. s = "abbad"
  // stack = [a] -> stack = [a, b] -> stack = [a] -> stack = [] -> stack = [d]

  var answer = "";
  // stack에 남아있는 문자들은 문자열 answer에 차례로 이어붙여줌
  for (const c of stack) {
    answer = answer.concat(c);
  }
  return answer;
}

solution;

// stack을 이용해서 문제를 간단하게 해결했다!
// 나의 풀이는 반복문을 여러 번 돌아야 하는데, 이 풀이는 반복문을 두 번만 돌면 끝!!!
