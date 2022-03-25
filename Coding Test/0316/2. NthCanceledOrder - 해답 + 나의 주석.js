/**
 * @param orders {number[]}
 * @param n {number}
 * @returns {number}
 */

function solution(orders, n) {
  // 취소된 주문의 개수를 저장할 변수 missCount
  let missCount = 0;
  // 주문번호를 순회할 인덱스
  let num = 0;
  // 배열을 순회할 인덱스
  let i = 0;

  // 취소된 주문의 개수가 n개에 도달하면 while문 탈출
  while (missCount !== n) {
    // num을 1씩 증가시키며 orders 배열에 포함되는지 확인
    num++;

    // num이 orders 배열에 있으면
    if (orders[i] === num) {
      // 배열을 순회하는 i인덱스를 1 증가
      i++;
    }
    // num이 orders 배열에 없으면 (num 주문이 취소되었으면)
    else {
      // 취소된 주문의 개수를 1 증가
      missCount++;
    }
  }

  return num;
}

solution;
