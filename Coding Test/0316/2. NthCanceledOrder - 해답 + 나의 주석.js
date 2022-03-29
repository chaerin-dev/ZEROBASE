/*
온라인으로 주문을 받고 있습니다. 주문 번호는 주문 순서대로 1부터 증가합니다.
일부 주문이 취소된 주문 내역이 주어질 경우,
n번째 주문 취소된 주문 번호를 구하는 함수, solution을 완성해주세요.
예를 들어, 주문 내역 orders [2, 4, 5, 7]이 있고, 3번째 취소된 주문 번호는 6입니다.
(1번째 취소 주문 번호는 1, 2번째 취소 주문 번호는 3, 3번째 취소 주문 번호는 6)
*/

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
  // 주문내역이 저장된 배열을 순회할 인덱스
  let i = 0;

  // 취소된 주문의 개수가 n개에 도달하면 while문 탈출
  while (missCount !== n) {
    // num(주문번호)을 1씩 증가시키며 orders 배열에 포함되는지(주문취소여부) 확인
    num++;

    // num번 주문이 취소되지 않았으면
    if (orders[i] === num) {
      // 다음 주문내역 확인
      i++;
    }
    // num번 주문이 취소되었으면
    else {
      // 취소된 주문의 개수를 1 증가
      missCount++;
    }
  }

  // n번째 주문 취소된 주문 번호 반환
  return num;
}

solution;
