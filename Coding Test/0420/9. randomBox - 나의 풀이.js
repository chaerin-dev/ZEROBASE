/*
[문제 설명]
배열 A는 랜덤 박스에 들어있는 선물의 개수가 저장되어있습니다.
이때 연속된 박스를 1개 이상 구입하여 K명의 자식들에게 공평하게 선물을 분배 가능한 경우의 수를 구하세요.
단 K는 1이상의 값을 가집니다.

예를들어 랜덤 박스에 선물 개수 정보가 [1, 2, 3, 4, 5, 6] 으로 주어지고 자식수가 4명이라면
아래의 경우의수를 만족합니다.

2 + 3 + 4 + 5 + 6 = 20(5개씩 분배)
3 + 4 + 5 = 12(3개씩 분배)
4 (1개씩 분배)
     
총 3가지 경우의 수가 가능하기 때문에 3을 리턴합니다.
이때 1 + 3 등의 케이스는 연속된 박스가 아니기 때문에 제외됩니다.

[입력]
 랜덤박스에 들어있는 선물의 개수 정보가 들어있는 배열 A
 자식의 수 K
 
[출력]
  구매 가능한 랜덤 박스의 수 K
*/

function solution(A, K) {
  // 효율성을 위해 0 인덱스부터 현재 인덱스까지 선물 개수의 합을 저장한 sum 배열을 미리 계산해둠
  // 이 때, 계산의 편의를 위해 sum[0] = 0으로 초기화
  // 인덱스값을 맞추기 위해 배열 A의 맨 앞에도 0을 추가
  let sum = [];
  sum[0] = 0;
  for (let i = 0; i < A.length; i++) {
    sum[i + 1] = sum[i] + A[i];
  }
  A.unshift(0);

  // 가능한 경우의 수의 개수를 저장할 변수
  let answer = 0;
  // i: 연속된 선물박스의 시작 인덱스, j: 연속된 선물박스의 끝 인덱스
  for (let i = 1; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      // i번 선물박스부터 j번 선물박스까지 들어있는 선물의 개수: sum[j]-sum[i-1]
      if ((sum[j] - sum[i - 1]) % K == 0) answer++;
    }
  }

  return answer;
}

// 점수: 1.0/1.0
