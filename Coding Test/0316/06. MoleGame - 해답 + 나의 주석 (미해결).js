/*
3 x 3개의 격자 형태의 두더지 게임판이 있습니다.
두더지들은 들어가거나 나와 있는데, 이 두더지들을 모두 나오도록 바꾸는 게임입니다.
두더지를 조작하는 유일한 방법은 10개의 스위치를 조작하는 것으로,
각 스위치는 1개 이상의 두더지에 연결되어 있습니다.
한 스위치를 누를 때마다,
해당 스위치와 연결된 나와 있던 두더지는 들어가고, 들어가 있던 두더지는 나옵니다.
이때, 모든 두더지를 나오게 하려면 최소한 스위치를 몇 번이나 눌러야 할지를 출력하는 함수,
solution을 완성해주세요.
예를 들어, 게임판의 9마리 두더지 상태 state로 [ 1, 0, 1, 0, 0, 1, 1, 1, 1 ]가 있고,
10개의 스위치에 연결된 두더지 번호 linkNums가
[ [1], [7], [8], [4, 7], [1, 3], [3, 4, 8], [0], [6], [2], [1, 4] ] 라고 가정할 때,
스위치에 연결된 두더지 정보는 다음과 같습니다.
> 스위치 0에 연결된 두더지 번호 1
> 스위치 1에 연결된 두더지 번호 7
> 스위치 2에 연결된 두더지 번호 8
> 스위치 3에 연결된 두더지 번호 4, 7
> 스위치 4에 연결된 두더지 번호 1, 3
> 스위치 5에 연결된 두더지 번호 3, 4, 8
> 스위치 6에 연결된 두더지 번호 0
> 스위치 7에 연결된 두더지 번호 6
> 스위치 8에 연결된 두더지 번호 2
> 스위치 9에 연결된 두더지 번호 1, 4
이때, 모든 두더지를 나오게 하려면 최소한 3번의 스위치(스위치 0, 2, 5)를 눌러야 합니다.
*/

/**
 * @param state {number[]}
 * @param linkNums {number[][]}
 * @return {number}
 */

function solution(state, linkNums) {
  // 주어진 linkNums를 사용하기 편하게 이중 배열로 가공
  const linked = generateLinked(linkNums);
  const minClickCount = countMinClickToAllOut(state, linked, 0);

  // 모든 두더지를 나오게 할 수 없으면(minClickCount가 INF) -1을 반환
  // 그렇지 않으면 모든 두더지를 나오게 하는 데에 필요한 최소 스위치 클릭 횟수(minClickCount) 반환
  return minClickCount === INF ? -1 : minClickCount;
}

const INF = 9999;

// 주어진 linkNums를 사용하기 편하게 이중 배열로 가공한다
// Ex. linkNums = [[1], [7], [8], [4, 7], [1, 3], [3, 4, 8], [0], [6], [2], [1, 4]]
/* => linked =
[ [ 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
  [ 0, 0, 0, 0, 1, 0, 0, 1, 0 ],
  [ 0, 1, 0, 1, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 1, 1, 0, 0, 0, 1 ],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
  [ 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
  [ 0, 1, 0, 0, 1, 0, 0, 0, 0 ] ]
  => linked[i][j]가 1이면 스위치 i와 두더지 j가 연결되어 있다는 뜻!
*/
function generateLinked(linkNums) {
  const MOLE_SIZE = 9;
  const linked = [];

  for (let i = 0; i < linkNums.length; i++) {
    linked[i] = new Array(MOLE_SIZE).fill(0);

    for (let j = 0; j < linkNums[i].length; j++) {
      const linkedMoleIndex = linkNums[i][j];
      linked[i][linkedMoleIndex] = 1;
    }
  }

  return linked;
}

// ??? 코드를 봐도 이해가 안돼요..
function countMinClickToAllOut(state, linked, switchIndex) {
  // 기저사례 : 모든 스위치를 순회한 경우
  if (switchIndex >= linked.length) return isAllOut(state) ? 0 : INF;

  // 스위치 누른 횟수를 큰 수로 초기화 한다.
  let clickCount = INF;
  for (let i = 0; i < 2; i++) {
    // 스위치를 누른 횟수가 작은 수를 취한다.
    clickCount = Math.min(
      clickCount,
      i + countMinClickToAllOut(state, linked, switchIndex + 1)
    );
    clickSwitch(state, linked, switchIndex);
    // 버튼을 2번 누르면 초기 상태로 돌아간다.
  }

  return clickCount;
}

// 모든 두더지가 나왔는지 확인
function isAllOut(state) {
  // state의 원소 중 하나라도 0이면(나오지 않은 두더지가 있으면) .reduce 메서드의 결과가 0이므로 false를 반환
  // state의 원소가 모두 1이면(모든 두더지가 나왔으면) .reduce 메서드의 결과가 1이므로 true를 반환
  return state.reduce((acc, cur) => acc && cur === 1, true);
}

// swithchIndex 스위치를 눌렀을 때, 두더지의 상태 변경
function clickSwitch(state, linked, switchIndex) {
  for (let i = 0; i < linked[switchIndex].length; i++) {
    const isLinked = linked[switchIndex][i] === 1;
    if (isLinked) {
      // state[i]가 1이었으면 0으로, 0이었으면 1로 toggle!!!
      state[i] = (state[i] + 1) % 2;
    }
  }
}

solution;

// !!! 해답 코드를 보고도 아직 이해하지 못한 문제.. 다음에 다시 풀어보자.. !!!
