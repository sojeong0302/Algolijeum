function solution(a, b) {
  // 2016년 a월 b일은 실제로 있는 날입니다.
  // 실제 존재하는 날짜이기에 new Date()메서드로 검색이 가능합니다.

  // getDay()를 하면 요일의 숫자가 나오므로 요일 숫자에 맞게 셋팅합니다.
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // new Date("원하는 날짜").getDay()를 이용해 해당 날짜의 숫자를 추출합니다.
  const idx = new Date(`2016/${a}/${b}`).getDay();

  // 요일을 반환합니다.
  return days[idx];
}