/*
SNS에서 서로가 팔로우를 했다는 것을 '맞팔'이라고 표현합니다.
다음 팔로우 관계를 나타낸 배열을 통해 서로 맞팔 관계인 쌍의 수를 리턴하는 함수를 작성하세요.
이때 ["철수", "영희"] 라는 정보는 철수가 영희를 팔로우 했음을 나타냅니다.
 
[입력]
팔로우 관계가 표현된 String 2차원 배열 A.
 
[출력]
맞팔 관계인 쌍의 수
*/

function solution(A) {
  // 맞팔 관계인 쌍의 수를 저장할 변수
  let answer = 0;
  // 이차원 배열의 각 요소(일차원 배열)에 대해
  for (let i = 0; i < A.length - 1; i++) {
    // 팔로우 <-> 팔로워 관계를 뒤집어서 배열 reverse에 저장
    reverse = [];
    reverse.push(A[i][1]);
    reverse.push(A[i][0]);
    // 해당 요소 이후에 reverse와 같은 배열이 나오는지 확인
    for (let j = i + 1; j < A.length; j++) {
      // 배열의 일치여부 확인을 위해 문자열로 변환
      str_a = JSON.stringify(A[j]);
      str_b = JSON.stringify(reverse);
      // 배열이 일치하면 맞팔 관계인 쌍의 수 증가
      if (str_a == str_b) answer++;
    }
  }
  return answer;
}

// 점수: 1.0/1.0
