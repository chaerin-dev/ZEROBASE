/*
주어진 두개의 수를 소인수분해 했을 때 공통된 소수의 집합을 가지고 있는지 판단하는 함수를 작성하세요.
 
예를들어  12, 6 은 두 수 모두 2와 3으로만 이루어져 공통된 소수 집합을 가지고 있습니다.
9, 18의 경우 9는 3으로 이루어져 있으며, 18은 2, 3으로 이루어져 있기 때문에 공통 소수 집합이 아닙니다.
 
[입력]
1 ~ 10000 사이의 정수 A, B
 
[출력]
공통된 소수 집합인 경우 1, 아니면 0
*/

/* 나의 원래 풀이
function primeFactorization(x) {
  let s = new Set();
  for (let i = 2; i <= x; i++) {
    while (x % i == 0) {
      x /= i;
      s.add(i);
    }
  }
  return s;
}

function solution(A, B) {
  set_a = primeFactorization(A);
  set_b = primeFactorization(B);
  str_a = JSON.stringify(set_a);
  str_b = JSON.stringify(set_b);

  return str_a == str_b ? 1 : 0;
}
*/

// 점수: 0.6/1.0
// JSon.stringify는 배열을 비교할 때 사용해야 하는데 set을 비교할 때 사용

// 수정한 풀이
// x의 소인수 집합을 구하는 함수
function primeFactorization(x) {
  let s = new Set();
  for (let i = 2; i <= x; i++) {
    while (x % i == 0) {
      x /= i;
      s.add(i);
    }
  }
  return s;
}

function solution(A, B) {
  // A의 소인수 집합을 배열로 변환
  arr_a = Array.from(primeFactorization(A));
  // B의 소인수 집합을 배열로 변환
  arr_b = Array.from(primeFactorization(B));
  // arr_a와 arr_b를 문자열로 바꿔 비교
  // 두 문자열이 같으면 (A와 B가 공통된 소수의 집합을 가지면) 1 반환
  // 그렇지 않으면 0 반환
  return JSON.stringify(arr_a) == JSON.stringify(arr_b) ? 1 : 0;
}
