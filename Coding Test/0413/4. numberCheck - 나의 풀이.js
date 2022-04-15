/*
[문제 설명]
0 ~ N 까지 수를 나열했을 때 숫자 K가 몇번이나 등장하는지 확인하는 함수를 구현하세요.
 
K의 등장 횟수이기 때문에 K가 1인 경우 111에서는 1이 3번 등장했고 결과에 3을 합해야 합니다.
 
[입력]
양의 정수 N, 0~9 사이의 정수 K
 
[출력]
0 ~ N 까지 K 등장 횟수
*/

function solution(N, K) {
  // K가 등장한 횟수를 저장할 변수
  let answer = 0;
  // 0부터 N까지 차례로
  for (let i = 0; i <= N; i++) {
    // 해당 수를 문자열로 변환하여 변수 str에 저장
    let str = String(i);
    // str의 각 문자에 대해
    for (let j = 0; j < str.length; j++) {
      // K가 존재하면 K 등장 횟수 1 증가
      if (str[j] == K) answer++;
    }
  }
  return answer;
}

// 점수: 1.0/1.0
