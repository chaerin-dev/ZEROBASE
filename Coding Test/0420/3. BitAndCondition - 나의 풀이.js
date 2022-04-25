/*
[문제 설명]
 n개의 2진수가 주어질 때, 이를 and 연산한 결과를 10진수 숫자로 변환해서 출력하는 함수, solution을 완성해주세요.
 예를 들어, arr ['10110', '1010', '11110']가 있을 때,
 and 연산한 결과는 이진수로 '10'이고, 10진수로 변환하면 2입니다.

[입력 형식]
 - arr는 길이가 1 이상 5 이하의 배열입니다.
 - arr의 요소는 '0', '1'로 이루어진 길이가 1 이상 10 이하의 문자열입니다.

[출력 형식]
 - and 연산한 결과를 10진수로 출력합니다.
*/

function solution(arr) {
  // 문제 조건에는 arr길이가 1 이상이라고 되어있는데 arr 길이가 0인 테스트케이스가 있는 듯..?

  // Sol1: 배열의 각 원소를 정수로 변환한 후 reduce 메서드 이용
  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i], 2);
  }
  let answer = arr.reduce(function (acc, item) {
    return acc & item;
  });
  return answer;

  // Sol2: 배열의 각 원소를 정수로 변환한 후 for문 이용
  // if (arr.length === 0) return 0;
  // for(let i=0; i<arr.length; i++){
  //     arr[i] = parseInt(arr[i], 2);
  // }
  // let answer = arr[0];
  // for(let i=1; i<arr.length; i++){
  //     answer = answer & arr[i];
  // }
  // return answer;

  // Sol3: 배열의 각 원소에 대해 문자열의 길이를 10으로 맞추고 각 자리마다 직접 and 연산
  //  if (arr.length === 0) return 0;
  // for(let i=0; i<arr.length; i++){
  //     if (arr[i].length < 10) arr[i] = "0".repeat(10-arr[i].length) + arr[i];
  // }
  // let answer = "";
  // for(let i=0; i<10; i++){
  //     let temp = arr[0][i];
  //     for(let j=0; j<arr.length; j++){
  //         if (temp === "1" && arr[j][i] === "1") temp = "1";
  //         else temp = "0";
  //     }
  //     answer += temp;
  // }
  // return parseInt(answer, 2);
}

// 점수: 1.0/1.0

function solution2(arr) {
  if (arr.length === 0) return 0;
  const answer = arr.reduce((a, b) => parseInt(a, 2) & parseInt(b, 2));
  return answer;
}

console.log(solution2(["10110", "1010", "11110"]));
console.log(solution2(["1101"]));
console.log(solution2([]));
console.log(solution2(["101010", "10101"]));
console.log(solution2(["110011", "101010", "111110"]));
console.log(solution2(["11111", "1010101", "1110111"]));
// ['10110', '1010', '11110'] 2
// ['1101'] 13
// [] 0
// ['101010', '10101'] 0
// ['110011', '101010', '111110'] 34
// ['11111', '1010101', '1110111'] 21
