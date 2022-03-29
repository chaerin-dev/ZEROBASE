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
