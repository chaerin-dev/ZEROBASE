/* 19. 문자 교정 */

/* user code */
function answer(str) {
  let fix_str = "";

  for (let item of str.split(" ")) {
    fix_str += item[0].toUpperCase() + item.slice(1) + " ";
  }

  return fix_str;
}

/* main code */
let input = [
  // TC: 1
  "Hello, My name is john",
  // TC: 2
  "This week is closed due to COVID-19",
  // TC: 3
  "fifty percent off this week",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// str를 " "를 기준으로 분리한 각 단어에 대하여
// 각 단어의 첫 글자를 대문자로 바꿔주고, 나머지 글자는 그대로 이어붙인 뒤,
// 마지막으로 " "를 이어붙인다.
