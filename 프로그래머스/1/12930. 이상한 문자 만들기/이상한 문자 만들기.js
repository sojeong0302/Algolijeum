function solution(s) {
  return s
    .split(" ")
    .map((x) =>
       x.split("")
        .map((y, inde) => (inde % 2 == 0 ? y.toUpperCase() : y.toLowerCase()))
        .join("")
    )
    .join(" ");
}