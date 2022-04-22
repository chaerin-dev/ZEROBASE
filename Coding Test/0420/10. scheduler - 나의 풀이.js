/*
[문제 설명]
CPU의 단일 코어는 한번에 하나의 프로세스만 실행할 수 있습니다.

A : 0초에 3초가 걸리는 작업 요청
B : 1초에 5초가 걸리는 작업 요청
C : 3초에 10초가 걸리는 작업 요청

만약에 위에 같이 요청이 왔을 경우 실행할 수 있는 방법은 A -> B -> C와, A -> C -> B가 있습니다.

두 방법이 작업을 모두 완료하는데 걸리는 평균은 아래와 같습니다.

방법 1
1. A 실행(요청으로 부터 3초 소요)
2. B 실행(1초에서 3초까지 대기한 후 작업을 시작해서 7초 소요)
3. C 실행(3초에서 8초까지 대기한 후 작업을 시작해서 15초 소요)

평균 8.33초

방법 2
1. A 실행(요청으로 부터 3초 소요)
2. C 실행(3초에 작업 시작해서 10초 소요)
3. B 실행(1초에서 14초까지 대기한 후 작업 시작해서 17초 소요)

평균 10초

각 작업에 대해 작업이 요청되는 시점, 작업의 소요시간을 담은 2차원 배열 A가 매개변수로 주어질 때,
가장 작게 걸린 평균 시간을 리턴하는 함수를 작성하세요.

단, 평균 시간의 소수점은 버립니다.

[입력]
 프로세스의 요청 시간과 작업시간이 입력된 배열 A

[출력]
 최소로 걸린 평균 작업시간 (소수점 버림)
*/

// 요청 시점: 프로세스가 CPU에 작업을 요청한 시점
// 작업소요시간: 해당 프로세스를 처리하는 데에 걸리는 시간
// 작업 시간: 대기시간 + 작업소요시간

function solution(A) {
  // Sol1: 그냥 시작타이밍 오름차순으로 돌려본건데 테스트케이스가 부족한 듯..?
  // 반례1: [[0, 3], [1, 10], [2, 1]]
  // 반례2: [[0, 3], [1, 10], [1, 2]]
  // let N = A.length;
  // A.sort((a, b) => a[0] - b[0]);
  // let total = 0;
  // let end = 0;
  // while(A.length){
  //     [newStart, time] = A.shift();
  //     let temp = time;
  //     if (newStart < end) temp += end - newStart;
  //     end = newStart + temp;
  //     total += temp;
  // }
  // return Math.floor(total/N);

  // Sol2
  // 평균 계산을 위해 배열의 길이를 저장해둠
  let N = A.length;
  // 각 프로세스의 요청 시점이 오름차순이 되도록,
  // 요청 시점이 같을 경우 작업시간이 오름차순이 되도록 배열 A 정렬
  A.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  // 모든 프로세스의 작업시간의 합을 저장할 변수
  let total = 0;
  // 현재 실행중인 프로세스의 종료시점을 저장할 변수
  let end = 0;
  // 남은 프로세스가 없을 때까지 반복
  while (A.length) {
    // 현재 실행중인 프로세스의 종료시점 이전에 요청이 들어온 프로세스들만 추려서
    let tempArr = A.filter((item) => item[0] <= end);
    if (tempArr.length > 0) {
      // 작업소요시간이 오름차순이 되도록 정렬
      tempArr.sort((a, b) => a[1] - b[1]);
      // 작업소요시간이 가장 짧은 프로세스가 다음에 실행되어야 함
      [newStart, time] = tempArr[0];
      A.splice(A.indexOf(tempArr[0]), 1);
    }
    // 현재 실행중인 프로세스의 종료시점 이전에 요청이 들어온 프로세스가 없는 경우
    else [newStart, time] = A.shift();

    // 새롭게 실행될 프로세스의 작업시간을 저장할 변수
    let temp = time;
    // 새롭게 실행될 프로세스가 직전에 실행된 프로세스 종료시점 이전에 요청이 들어온 경우
    // 대기시간도 작업시간에 포함
    if (newStart < end) temp += end - newStart;
    end = newStart + temp;
    // 모든 프로세스의 작업시간의 합에 새롭게 실행될 프로세스의 작업시간을 더해줌
    total += temp;
  }

  // 모든 프로세스의 작업시간 평균 반환
  return Math.floor(total / N);
}

// 점수: 1.0/1.0
