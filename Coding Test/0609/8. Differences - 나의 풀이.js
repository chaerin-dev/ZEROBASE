/*
[문제 설명]
김제로는 1부터 N까지의 모든 값을 원하는 K값으로 만드는 배열을 구하고 싶습니다.
식으로 나타내자면 각 인덱스를 i라고 했을 때, arr[i] - i의 절대값이 K가 되는 배열입니다.
고로,  라는 식이 성립하고, N과 K가 주어졌을 때 원래의 배열의 순서를 조작하여 결과를 반환해야 합니다.
예를 들어, N = 4와 K = 2로 주어졌을 경우에 처음의 배열은 1부터 N까지인 [1, 2, 3, 4] 이고,
모든 원소를 를 고려하여 K의 값인 2로 만들 수 있게 순서를 변경해야 합니다.
때문에 원 배열을 조작하여 [3, 4, 1, 2]의 배열으로 만들면, /  /  /  가 되게 됩니다.
또한, 여러가지 결과물이 나올 수 있지만 가장 작은 사전순서 배열을 반환해야 하고,
결과물을 만들어 낼 수 없을 경우에는 -1을 반환해야 합니다.

[제한 사항]
- N의 값은 1 이상 100000 이하 입니다.
- K의 값은 0 이상 N 이하 입니다.

[입력 형식]
- [1, N] 까지의 값을 만드는 N 값이 제공되고, 만들어야 하는 결과값인 K가 제공됩니다.

[출력 형식]
- 모든 값을 K로 만들 수 있는 배열을 출력합니다. 없을 경우 -1을 출력합니다.
*/

// TC 부족
// N = 8, K = 2 -> [ 3, 4, 1, 2, 7, 8, 5, 6 ]

// 제출한 풀이:
// K가 0이면 원래 배열을 반환하고,
// N이 짝수이면서 K가 1이면 앞에서부터 두 개씩 묶어 자리를 바꾼 배열을 반환하고,
// N이 짝수이면서 K가 N/2이면 앞의 절반과 뒤의 절반 자리를 바꾼 배열을 반환
// 위의 경우에 포함되지 않는 경우 [-1]반환
function solution(N, K) {
  let arr = Array.from({ length: N }, (e, i) => i + 1);
  let answer = [];
  if (K === 0) return arr;
  if (N % 2 === 0 && K === 1) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) answer[i + 1] = arr[i];
      else answer[i - 1] = arr[i];
    }
    return answer;
  }
  if (N % 2 === 0 && K === N / 2) {
    answer.push(arr.slice(N / 2));
    answer.push(arr.slice(0, N / 2));
    return answer.flat();
  } else return [-1];
}

// 재풀이: 정답 코드 참고
function solution2(N, K) {
  let arr = Array.from({ length: N }, (e, i) => i + 1);
  if (K === 0) return arr;
  if (N % (2 * K) === 0) {
    let answer = new Array(N + 1);
    for (let i = 1; i <= N; i++) {
      if (answer[i] == null) {
        answer[i] = i + K;
        answer[i + K] = i;
      }
    }
    return answer.slice(1);
  } else return [-1];
}

// 점수: 1.0/1.0
