/*** 5. 무한 뺄셈 ***/

/* user code */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);

  let sum;
  while (1) {
    sum = s - e;
    s = e;
    e = sum;

    if (e < 0) break;

    sequence.push(e);
  }

  return sequence;
}

/* main code */
let input = [
  // TC: 1
  [9, 3],
  // TC: 2
  [6, 3],
  // TC: 3
  [13, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// 매번 배열의 맨 뒤 두 값을 뽑아내는 것이 아니라
// 차를 구하고 s, e값을 갱신시켜 주는 방식!
