/*** 2. 두 수 사이 숫자 ***/

/* user code */
function answer(x, y) {
  let result = [];

  if (x > y) {
    let t = x;
    x = y;
    y = t;
    // ES6부터 [x, y] = [y, x] 으로 쉽게 x와 y를 swap 할 수 있음
  }

  for (let i = x; i <= y; i++) {
    result.push(i);
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [3, 7],
  // TC: 2
  [8, 3],
  // TC: 3
  [12, 10],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// x가 y보다 큰 경우에 두 숫자를 스왑해줬다.
