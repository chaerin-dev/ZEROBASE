/*
[문제 설명]
제로베이스에서는 수강생들을 사용하는 프로그래밍 언어에 따라 그룹으로 분류하여 2명을 선택하고 싶습니다.
하지만 뽑힌 2명의 학생이 같은 프로그래밍 언어를 사용하면 안 됩니다.

입력으로 주어지는 배열에는 같은 언어를 사용하는 학생들이 짝을 지어 제공되고,
이를 그룹화하여 각자 다른 언어를 사용하는 2명을 뽑는 방법의 가짓수는 얼마나 있는지 판단해주시면 됩니다.

예를 들어, 4명의 학생이 존재하고 주어지는 배열이 [1,2], [2,3] 이라면,
학생은 0,1,2,3으로 4명이 존재하고 1번 학생과 2번 학생이 같은 언어, 2번 학생과 3번 학생이 같은 언어를 사용합니다.
고로, [0번 학생]과 [1,2,3번 학생] 2개의 그룹으로 나뉘어지게 되고, 가능한 가짓수는 [0,1], [0,2], [0,3]으로 3가지입니다.

[제한 사항]
- 학생은 최소 1명 최대 10000명입니다.
- 주어지는 배열의 길이는 최소 1개 최대 10000개입니다.
- 학생의 ID는 항상 0부터 시작합니다.

[입력 형식]
- 학생의 숫자를 의미하는 N과 주어지는 배열 language의 각 요소는 같은 언어를 사용하는 학생의 짝으로 이루어져 있습니다.

[출력 형식]
- 제로베이스에서 2명을 선택하는 모든 경우의 수의 개수를 반환해주세요
*/

// 제출한 풀이
function solution(N, language) {
  let students = Array.from({ length: N }, () => 0);
  let languageCnt = 0;
  for (let i = 0; i < language.length; i++) {
    const [student1, student2] = [language[i][0], language[i][1]];
    if (students[student1] === 0 && students[student2] === 0) {
      languageCnt++;
      students[student1] = students[student2] = languageCnt;
    } else {
      if (students[student1] === 0) students[student1] = students[student2];
      else if (students[student2] === 0) students[student2] = students[student1];
      else {
        let beforeLangNo = students[Math.max(student1, student2)];
        let afterLangNo = students[Math.min(student1, student2)];
        students[Math.max(student1, student2)] = afterLangNo;
        for (let j = 0; j < students.length; j++) {
          if (students[j] === beforeLangNo) students[j] = afterLangNo;
        }
      }
    }
  }
  console.log(students);

  let studentCntByLanguage = Array.from({ length: languageCnt + 1 }, () => 0);
  students.forEach((student) => studentCntByLanguage[student]++);
  console.log(studentCntByLanguage);

  let answer = 0;
  for (let i = 0; i < studentCntByLanguage.length - 1; i++) {
    for (let j = i + 1; j < studentCntByLanguage.length; j++) {
      answer += studentCntByLanguage[i] * studentCntByLanguage[j];
    }
  }
  return answer;
}

// 점수: 0.4/1.0

// 정답 코드
function solution(n, language) {
  let ranks = [];
  for (let i = 0; i < n; i++) {
    ranks.push(-1);
  }

  for (let lan of language) {
    const [first, second] = lan;
    union(first, second);
  }

  function union(fir, sec) {
    let p1 = find(fir);
    let p2 = find(sec);

    if (p1 !== p2) {
      ranks[p2] = p1;
    }
  }

  function find(node) {
    if (ranks[node] !== -1) {
      return find(ranks[node]);
    }
    return node;
  }

  let curObj = {};
  for (let i = 0; i < ranks.length; i++) {
    let key = find(i);
    if (key in curObj) {
      curObj[key] += 1;
    } else {
      curObj[key] = 1;
    }
  }

  let answer = 0;
  let numbers = Object.values(curObj);

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer += numbers[i] * numbers[j];
    }
  }
  return answer;
}
