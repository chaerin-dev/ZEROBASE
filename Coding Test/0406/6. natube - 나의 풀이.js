/*
[문제 설명]
나튜브에는 다양한 카테고리의 개인 방송국이 있습니다.
나튜브의 메인 페이지에는 사용자의 구독 정보를 바탕으로 영상을 추천해주는 기능이 있습니다.
 
각 방송국에는 한개이상의 카테고리를 가지고 있으며
추천은 구독한 방송국과 동일한 카테고리에 해당하는 방송국들의 컨텐츠들을 보여줍니다.
방송국과 카테고리 정보가 담긴 2차원 배열 A와
특정 유저의 구독 정보가담긴 1차원 배열 B가 주어질 때
영상 추천 가능한 방송국의 개수를 리턴하는 함수를 작성하세요.
 
[입력]
카테고리와 방송국 명칭이 담긴 2차원 배열 A
구독한 방송국 명칭이 담긴 배열 B
 
[출력]
추천 대상인 방송국 개수
*/

function solution(A, B) {
  // 특정 유저에게 추천할 카테고리 Set
  let category = new Set();
  // 특정 유저가 구독한 방송국들에 대해
  for (let i = 0; i < B.length; i++) {
    for (let j = 0; j < A.length; j++) {
      // 해당 방송국의 카테고리를 category에 저장
      if (B[i] == A[j][1]) category.add(A[j][0]);
    }
  }
  // 특정 유저에게 추천할 방송국 Set
  let recommend = new Set();
  // 특정 유저에게 추천할 카테고리에 대해
  for (let item of category.values()) {
    for (let j = 0; j < A.length; j++) {
      // 해당 카테고리에 해당하는 방송국을 recommend에 저장
      if (item == A[j][0]) recommend.add(A[j][1]);
    }
  }
  return recommend.size;
}

// 점수: 1.0/1.0
