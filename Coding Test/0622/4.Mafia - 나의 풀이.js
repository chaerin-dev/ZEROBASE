/*
[문제 설명]
제로베이스 멤버들은 모두 모여서 마피아게임을 하기로 했습니다.
마피아게임의 규칙은 다음과 같습니다.
N명의 멤버들은 같은 숫자의 카드를 받고, 단 2명만 다른 숫자의 카드를 받습니다.
멤버들은 최소 5명이 있으며, 매 게임마다 무조건 2명의 마피아가 존재합니다.
이 때 마피아인 멤버의 인덱스를 찾아서 오름차순으로 출력해주세요.

예를 들면 주어진 배열 members가 [4, 4, 10, 4, 10] 이라고 할 때,
5명의 멤버들 가운데 10의 카드를 가진 멤버가 마피아이고 저희가 출력해야 할 결과는 [2, 4]입니다.

[제한 사항]
- 배열 members에는 최소 5개 이상의 원소가 포함되어 있습니다.
- 배열 members의 모든 원소는 양수입니다.
- 마피아는 항상 2명입니다.

[입력 형식]
- 배열 members가 주어집니다.

[출력 형식]
- 마피아 2명의 인덱스가 담긴 배열을 오름차순으로 반환합니다.
*/

function solution(members) {
  let cntObj = {};
  let mafiaNum = 0;
  let answer = [];
  members.forEach((member) => (cntObj[member] ? cntObj[member]++ : (cntObj[member] = 1)));
  Object.keys(cntObj).forEach((key) => {
    if (cntObj[key] === 2) mafiaNum = key;
  });
  members.forEach((member, i) => {
    if (member == mafiaNum) answer.push(i);
  });
  return answer;
}

// 점수: 1.0/1.0
