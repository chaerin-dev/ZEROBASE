/*
[문제 설명]
좀비게임은 1명의 좀비와 N명의 사람이 진행하는 게임입니다.
게임 플레이 시간동안 각 참여자는 다른 참여자와 악수를 할 수 있습니다.
 
이때 좀비와 악수를한 플레이어는 좀비로 변하게 됩니다.
 
정해진 시간동안 악수를 다수의 참여자와 진행하며
시간이 끝난후 좀비가 아닌 플레이어 중에 악수를 가장 많이한 플레이어가 우승합니다.
만약 모든 플레이어가 좀비가 되었다면 좀비 플레이어가 우승합니다.
 
배열 A에는 참여자의 악수 정보가 들어있고 문자열 S에는 좀비 플레이어 정보가 제공되었을 때
해당 라운드의 우승자를 찾는 함수를 작성하세요.
또한 악수 횟수가 동일한 경우 공동 우승으로 처리되며 오름차순으로 정렬하여 리턴하세요.
배열 A에 존재하는 순서는 터치 시간순서 이며 모든 플레이어는 1회 이상 악수를 진행합니다.
 
[입력]
참여자끼리의 악수 정보가 들어있는 2차원 배열 A
좀비 유저 문자열 S
 
[출력]
우승자 목록 배열
*/

function solution(A, S) {
  // 각 플레이어가 좀비가 되었는지 저장할 Set
  let zombie = new Set();
  zombie.add(S);

  // 각 플레이어의 악수 횟수를 저장할 Map
  let handShake = new Map();

  for (let i = 0; i < A.length; i++) {
    // 악수한 두 플레이어 중 하나라도 좀비라면 둘 다 좀비 set에 추가
    if (zombie.has(A[i][0]) || zombie.has(A[i][1])) {
      zombie.add(A[i][0]);
      zombie.add(A[i][1]);
    }
    // 악수 횟수 추가
    handShake.has(A[i][0])
      ? handShake.set(A[i][0], handShake.get(A[i][0]) + 1)
      : handShake.set(A[i][0], 1);
    handShake.has(A[i][1])
      ? handShake.set(A[i][1], handShake.get(A[i][1]) + 1)
      : handShake.set(A[i][1], 1);
  }

  // 우승자 구하기
  let answer = [];
  // 좀비 우승
  if (zombie.size === handShake.size) answer.push(S);
  // 생존자 우승(악수를 가장 많이 한 플레이어 목록 반환)
  else {
    // 최대 악수 횟수를 저장할 변수
    let max = 0;
    for (let item of handShake.keys()) {
      if (max <= handShake.get(item) && !zombie.has(item)) {
        max = handShake.get(item);
      }
    }
    for (let item of handShake.keys()) {
      if (max === handShake.get(item) && !zombie.has(item)) {
        answer.push(item);
      }
    }
  }
  return answer;
}

// 점수: 1.0/1.0
