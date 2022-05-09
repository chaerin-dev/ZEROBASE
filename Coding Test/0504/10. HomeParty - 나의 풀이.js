/*
[문제 설명]
 생일잔치에 친구들을 초대해서 잔치를 하려고 합니다.
 요리를 잘 하지 못해서 배달을 하려고 하는데 배달 가능한 요리 목록들 중 친구들의 취향에 따라 못먹는 음식이 있습니다.
 모든 친구들의 적어도 한가지 이상의 음식을 먹을수 있도록 주문하기 위한 주문 방법 중
 요리 개수가 가장 적은 경우의 음식 개수를 리턴하는 함수를 작성하세요.

 예를들어 아래의 매개변수가 입력 되었을 때에는 4번 메뉴(bob, bobby)와 6번 메뉴(andrew, ant)를 주문시
 친구 4명의 취향을 모두 만족 시키기 때문에 최소 주문 수는 2개가 된다.
 Friends = ['bob', 'andrew', 'bobby', 'ant']
 Taste = [['bobby', 'ant'], ['bob', 'ant'], ['bob'], ['bob', 'bobby'] ,['andrew', 'bobby'], ['andrew', 'ant']]

[입력 형식]
 - 친구들의 이름이 들어있는 배열 Frineds
 - 각 메뉴별로 음식을 먹을 수 있는 친구들의 이름이 적힌 2차원 배열 Taste

[출력 형식]
 - 친구들의 취향을 만족시키는 최소한의 음식 주문 개수
*/

// 배열 arr에서 cnt개의 요소를 뽑는(조합) 모든 방법 배열로 반환하는 함수
function combination(arr, cnt) {
  const res = [];
  if (cnt === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, cnt - 1);
    const attach = combinations.map((combination) => [v, ...combination]);
    res.push(...attach);
  });
  return res;
}

function solution(Friends, Taste) {
  // 친구의 수를 미리 저장해둠
  let ppl = Friends.length;
  // answer는 1로 초기화하고 1씩 증가시키며 모든 친구들의 취향 만족 여부 확인
  let answer = 1;
  // 무한루프
  while (true) {
    // 각 메뉴중 answer개를 뽑는 모든 케이스를 cases에 저장
    let cases = combination(Taste, answer);
    // cases의 각 요소에 대해
    for (let i = 0; i < cases.length; i++) {
      // 선택된 메뉴들로 집합을 만들어 중복을 제거한 뒤 집합의 크기가 친구의 수와 일치하면 answer 반환
      if (new Set(cases[i].flat()).size === ppl) return answer;
    }
    // 모든 cases의 요소에 대해 모든 친구들의 취향을 만족할 수 없으면 answer 1 증가
    answer++;
  }
}

// 점수: 1.0/1.0
