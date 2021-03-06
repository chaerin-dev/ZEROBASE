/*
[문제 설명]
국가간 지역 정보를 표시한 지도가 있습니다.
여기서 다수의 영토간 연결을 통해 이어지는 모든 지역을 하나의 국가로 칭합니다.
 
예를 들어 A지역과 B지역이 연결되어있고, B지역과 C지역이 연결되어 있는 경우
A, B, C 영토는 모두 하나의 국가에 포함된 지역입니다.
각 지역 정보를 Index로 가지는 2차원 배열에 의해
연결된 부분은 1, 연결되지 않은 부분은 0으로 표시된 지도를 통해
가장 많은 영토를 가진 국가의 영토 갯수를 출력하세요.
 
예를 들어 아래의 지도 정보에서는 0-1 지역이 연결되어 있고
2, 3번은 독립되어 총 3개의 국가가 표시되어있는 지도입니다.
이중 0-1 이 가장 길게 연결되었기 때문에 최대 영토의 갯수는 2개가 됩니다.
 
[[1,1,0,0],
[1,1,0,0],
[0,0,1,0],
[0,0,0,1]]
 
[입력]
영토의 연결정보를 담은 2차원 배열 A
 
[출력]
최대로 연결된 영토의 개수
*/

// 문제 이해: A[i][j]가 1이면 i영토와 j영토가 연결되어 있다는 뜻
// 해결 방법: 연결된 영토들을 set으로 묶어 배열 setArr에 저장할 것

function solution(A) {
  let setArr = [];
  // 대각선 기준으로 우측 상단만 확인하면 됨(배열 A가 대각선 기준 대칭이므로)
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      // i지역과 j지역이 연결되어 있다면
      if (A[i][j]) {
        let has = false;
        // 연결된 영토들의 집합으로 이루어진 setArr의 각 집합에 대해
        setArr.forEach((item) => {
          // i영토가 이미 다른 어떤 영토와 연결되어 있다면 연결된 영토들의 집합에 j영토 추가
          if (item.has(i)) {
            item.add(j);
            has = true;
          }
        });
        // 만약 setArr에 i영토와 연결된 영토들의 집합이 없다면
        // i영토와 j영토로 이루어진 새로운 집합을 setArr에 넣어줌
        if (!has) {
          let temp = new Set();
          temp.add(i);
          temp.add(j);
          setArr.push(temp);
        }
      }
    }
  }

  // setArr를 구성하는 집합들 중 가장 큰 집합의 크기 반환
  let answer = 1;
  setArr.forEach((item) => {
    answer = Math.max(answer, item.size);
  });

  return answer;
}

// 점수: 1.0/1.0
