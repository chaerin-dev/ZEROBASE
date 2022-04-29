/*
[문제 설명]
 낱말 퍼즐을 풀려고 합니다. 퍼즐 판은 4 x 4 크기로 임의의 한글이 섞여 있습니다.
 주어진 낱말이 퍼즐 판에 인접한 형태로 존재하는지 구하는 함수, solution을 완성해주세요.

 예를 들어, puzzle [[`대`, `한`, `가`, `나`], [`국`, `민`, `다`, `라`],
 [`마`, `바`, `사`, `아`], [`자`, `차`, `카`, `타`]] 과 word `대한민국`이 있을 때,
 > puzzle[0][0] = `대`
 > puzzle[0][1] = `한`
 > puzzle[1][1] = `민`
 > puzzle[1][0] = `국`
 으로 결과는 true입니다.

[제한 사항]
 - 모든 낱말은 한글입니다.
 - 인접함은 상하좌우로 붙어있는 단어를 말합니다.
 - word는 공백없는 문자열입니다.
 - 한번 사용된 퍼즐 판의 낱말은 또다시 사용할 수 없습니다.

[입력 형식]
 - puzzle은 4 * 4 크기의 배열입니다.
 - word는 길이가 1 이상 10 이하의 문자열입니다.

[출력 형식]
 - 주어진 낱말이 퍼즐 판에 인접한 형태로 존재하는지를 출력합니다.
*/

// 나의 첫 번째 풀이: 시작지점이 여러 개일 경우를 고려하지 않았고,
// 우연히 모든 테이스케이스를 통과했을 뿐 제대로 작동하지 않음(그냥 아예 틀린 풀이)
function my_solution(puzzle, word) {
  let visited = Array.from(Array(4), () => Array(4).fill(false));
  let x = -1;
  let y = -1;
  let dx = [0, 0, -1, 1];
  let dy = [1, -1, 0, 0];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (puzzle[i][j] === word[0]) {
        x = i;
        y = j;
        visited[x][y] = true;
      }
    }
  }

  if (x === -1) return false;

  for (let i = 1; i < word.length; i++) {
    let find = false;
    for (let j = 0; j < 4; j++) {
      let tempX = x + dx[j];
      let tempY = y + dy[j];
      if (
        0 <= tempX &&
        tempX <= 4 &&
        0 <= tempY &&
        tempY <= 4 &&
        !visited[tempX][tempY] &&
        puzzle[tempX][tempY] === word[i]
      ) {
        x = tempX;
        y = tempY;
        visited[x][y] = true;
        find = true;
      }
    }
    if (!find) return false;
  }
  return true;
}

// 답안 풀이: 이해해보려고 노력하였으나.. 뇌가 멈춰버려서 미래의 나자신에게 맡기도록 하겠습니다..
const SIZE = 4;
const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function move(puzzle, word, x, y, moveIndex) {
  if (puzzle[x][y] !== word[moveIndex]) return false;
  if (moveIndex === word.length - 1) return true;

  puzzle[x][y] = "x";

  for (const [dx, dy] of DIRECTIONS) {
    const dirX = x + dx;
    const dirY = y + dy;
    if (0 <= dirX && dirX < SIZE && 0 <= dirY && dirY < SIZE) {
      if (move(puzzle, word, dirX, dirY, moveIndex + 1)) return true;
    }
  }

  return false;
}

function solution(puzzle, word) {
  for (let x = 0; x < SIZE; x++) {
    for (let y = 0; y < SIZE; y++) {
      if (move(puzzle, word, x, y, 0)) return true;
    }
  }

  return false;
}

// 점수: 1.0/1.0

// 테스트케이스가 개떡같아서 직접 만든 테스트케이스
console.log(
  solution(
    [
      ["대", "한", "가", "나"],
      ["국", "민", "다", "라"],
      ["마", "바", "사", "아"],
      ["자", "차", "카", "타"],
    ],
    "대한민국"
  )
);

console.log(
  solution(
    [
      ["대", "한", "민", "가"],
      ["가", "민", "가", "가"],
      ["가", "가", "가", "가"],
      ["가", "가", "가", "가"],
    ],
    "대한민국"
  )
);

// 코너케이스
console.log(
  solution(
    [
      ["대", "한", "민", "국"],
      ["가", "민", "가", "가"],
      ["가", "가", "가", "가"],
      ["가", "가", "가", "가"],
    ],
    "대한민국"
  )
);

// 코너케이스
console.log(
  solution(
    [
      ["대", "한", "민", "가"],
      ["가", "민", "가", "가"],
      ["가", "국", "가", "가"],
      ["가", "가", "가", "가"],
    ],
    "대한민국"
  )
);

console.log(
  solution(
    [
      ["대", "한", "민", "가"],
      ["가", "민", "가", "가"],
      ["가", "가", "가", "가"],
      ["대", "한", "민", "국"],
    ],
    "대한민국"
  )
);

console.log(
  solution(
    [
      ["대", "한", "가", "국"],
      ["가", "가", "가", "가"],
      ["가", "가", "가", "가"],
      ["가", "가", "가", "가"],
    ],
    "대한민국"
  )
);

console.log(
  solution(
    [
      ["대", "한", "대", "가"],
      ["가", "민", "가", "가"],
      ["가", "가", "가", "가"],
      ["가", "가", "가", "가"],
    ],
    "대한대한"
  )
);
