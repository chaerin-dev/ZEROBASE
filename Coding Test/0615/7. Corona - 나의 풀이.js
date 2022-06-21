/*
[문제 설명]
코로나로 인해 건물에 출입하는 인원의 시간을 체크하고 있습니다.
출입 기록인 history에는 출입한 사람의 번호 배열이 저장되어 있습니다.
history에는 건물에 들어올 때에는 양수가, 나갈 때에는 음수가 기록됩니다.
이때, 확진자 번호 infected가 주어질 때,
확진자와 동선이 겹치는 사람의 번호를 오름차순으로 출력하는 함수, solution을 완성해주세요.

예를 들어, history가 [3, 2, -3, 1, -1, -2, 4, -4, 1, -1]이고,
infected가 2로 주어질 때, 확진자와 동선이 겹치는 사람은 [1, 3]입니다.

[제한 사항]
사람은 건물을 여러 번 출입할 수 있습니다.
주어지는 history에는 건물에 남아있는 사람이 없습니다.

[입력 형식]
출입 기록인 history가 주어집니다.
history는 1 이상 100 이하의 정수로 이루어진 길이가 1000 이하의 배열입니다.
확진자 번호인 infected가 주어집니다.
infected는 1 이상 100 이하의 정수입니다.

[출력 형식]
확진자와 동선이 겹치는 사람의 번호를 오름차순 배열로 출력합니다.
*/

function solution(history, infected) {
  let arr = Array.from({ length: 101 }, () => false);
  let flag = false;
  for (let i = 0; i < history.length; i++) {
    if (history[i] === -infected) break;
    if (history[i] === infected) {
      flag = true;
      continue;
    }
    if (history[i] > 0) arr[history[i]] = true;
    if (!flag && history[i] < 0) arr[-history[i]] = false;
  }

  let overlapped = [];
  arr.forEach((ppl, i) => {
    if (ppl) overlapped.push(i);
  });
  return overlapped;
}

// 점수: 1.0/1.0
