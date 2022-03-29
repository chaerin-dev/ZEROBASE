/**
 * @param arr {number[]}
 * @param n {number}
 * @returns {number}
 */

function solution(arr, n) {
  // n개의 각 진료소의 상태를 저장할 Clinic을 생성
  const clinic = new Clinic(n);
  // clinic에 대해 Clinic 클래스의 getMinutes 메서드 수행
  return clinic.getMinutes(arr);
}

// '모든 진료소'를 총괄하는 Clinic 클래스
class Clinic {
  constructor(roomCount) {
    // 진료소의 개수만큼 Room을 생성해서 각각 배열 rooms에 넣어줌
    this.rooms = [];
    for (let i = 0; i < roomCount; i++) {
      this.rooms.push(new Room());
    }
  }

  getMinutes(arr) {
    // 총 소요 시간을 저장할 변수 result
    let result = 0;
    // 예약 환자가 남아있거나 하나의 진료소라도 진료를 진행하고 있으면
    while (arr.length || !this.isDone()) {
      this.enter(arr);
      this.heal();
      result++;
    }
    return result;
  }

  // '모든 진료소에서' 1분동안 1개의 진료부위 진료 (남은 진료 부위 1 감소)
  heal() {
    for (const room of this.rooms) {
      room.heal();
    }
  }

  // '모든 진료소에서' 더 이상 진행할 진료가 없을 때 true 반환
  isDone() {
    for (const room of this.rooms) {
      if (!room.isDone()) return false;
    }
    return true;
  }

  // 예약 환자가 남아있으면 가장 앞의 환자부터 차례로 빈 진료소에 넣어줌
  enter(arr) {
    if (!arr.length) return;

    for (const room of this.rooms) {
      if (room.isDone()) {
        room.enter(arr.shift());
        if (!arr.length) return;
      }
    }
  }
}

// '각 진료소'를 다루는 Room 클래스
class Room {
  // Room이 처음 생성되면 num(남은 진료 부위)의 기본값은 -1
  constructor() {
    this.num = -1;
  }

  // '각 진료소에서' 더 이상 진행할 진료가 없을 때 true 반환
  isDone() {
    return this.num < 0;
  }

  // '각 진료소에서' 환자가 새로 들어오면 남은 진료부위 업데이트
  enter(num) {
    this.num = num;
  }

  // '각 진료소에서' 1분동안 1개의 진료부위 진료 (남은 진료 부위 1 감소)
  heal() {
    this.num--;
  }
}

solution;
