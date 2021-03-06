/*
[문제 설명]
배열 A는 십만전자의 일단위 주식가격이 들어있습니다.
해당 주식 가격 기준으로 매수와 매도를 1회씩 진행했을때 가능한 최대 수익을 구하는 함수를 작성하세요.

이때 매도는 항상 매수 이후에 이루어지며 수익을 낼수 없는 경우 0을 리턴하세요.

[입력]
 주식의 일단위 주가 정보 배열 A

[출력]
 최대 수익 값
*/

function solution(A) {
  // 최대 수익 값을 저장할 변수
  let answer = 0;
  // i: 매수시 가격을 가리키는 인덱스
  // 반드시 매도를 1회 진행해야하므로 A.length가 아닌 A.length-1까지
  for (let i = 0; i < A.length - 1; i++) {
    // j: 매도시 가격을 가리키는 인덱스
    // 매도는 항상 매수 이후에 이루어지므로 i+1부터 시작
    for (let j = i + 1; j < A.length; j++) {
      // 매수가보다 매도가가 비싸면 최대 수익 계산해서 갱신
      // 매수가보다 매도가가 비싸다는 조건은 생략 가능하나, 효율성을 위해 추가
      if (A[i] < A[j]) answer = Math.max(answer, A[j] - A[i]);
    }
  }
  return answer;
}

// 점수: 1.0/1.0
