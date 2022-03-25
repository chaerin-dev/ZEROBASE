/**
 * @param s {string}
 * @return {number}
 */
function solution(s) {
  const numsCount = new Array(10).fill(0);

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    const num = Number(c);

    numsCount[num] += 1;
  }

  return mostAppearNum(numsCount);
}

function mostAppearNum(numsCount) {
  let ret = -1;
  let cnt = 0;

  for (let i = 0; i < 10; i++) {
    if (cnt < numsCount[i]) {
      ret = i;
      cnt = numsCount[i];
    }
  }

  return ret;
}

solution;
