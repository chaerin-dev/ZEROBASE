/*
[문제 설명]
김땡땡 강사님은 현재 강의를 맡고 있는데, 항상 학생들이 무단지각을 하는 바람에 화가 났습니다.
그래서 X명 이상의 학생이 지각했을 경우, 도착 시간이 가장 늦은 학생에게는 F학점을 주기로 마음을 먹었습니다.
강의가 시작하는 시간 N, 지각 마지노선 변수 X와 학생들이 강의실에 도착한 시간이 주어졌을 때, F학점을 받는 학생의 도착 시간을 반환해주세요.
하지만 X명 이하의 학생이 지각했을 경우 너그럽게 넘어가기로 했기 때문에, ‘PASS’를 출력해주시면 됩니다.

예를 들어 N = ‘13:00’, X = 3, arrived = ['12:50', '12:55', '13:00', '13:05', '13:10'] 일 경우,
지각한 사람은 2명이기 때문에 ‘PASS’를 반환해주시면 됩니다.
또한, N = ‘09:00’, X = 3, arrived = ['09:10', '13:05', '13:10'] 일 경우, ‘13:10’을 반환해주시면 됩니다.

[제한 사항]
- N은 시간의 형태로 "00:00"부터 시작하여 "23:59"까지 존재합니다. 강의가 다음날으로 넘어가는 경우는 없습니다.
- X는 1 이상 100이하입니다.
- arrived의 길이는 1 이상 1000이하입니다.

[입력 형식]
- N과 X, arrived가 주어집니다.

[출력 형식]
- F학점을 받는 학생의 도착 시간을 반환해주세요.
*/

function isLate(startTime, arriveTime) {
  const startTimeArr = startTime.split(":");
  const arriveTimeArr = arriveTime.split(":");
  if (parseInt(startTimeArr[0]) < parseInt(arriveTimeArr[0])) return true;
  if (
    parseInt(startTimeArr[0]) === parseInt(arriveTimeArr[0]) &&
    parseInt(startTimeArr[1]) < parseInt(arriveTimeArr[1])
  )
    return true;
  return false;
}

function solution(N, X, arrived) {
  let lateCnt = 0;
  arrived.sort();
  arrived.forEach((arriveTime) => {
    if (isLate(N, arriveTime)) lateCnt++;
  });
  if (lateCnt < X) return "PASS";
  return arrived[arrived.length - 1];
}

// 점수: 1.0/1.0
