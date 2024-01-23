function solution(s) {
  const object = {
    numberResult: [
      {
        number: 0,
        string: "zero",
      },
      {
        number: 1,
        string: "one",
      },
      {
        number: 2,
        string: "two",
      },
      {
        number: 3,
        string: "three",
      },
      {
        number: 4,
        string: "four",
      },
      {
        number: 5,
        string: "five",
      },
      {
        number: 6,
        string: "six",
      },
      {
        number: 7,
        string: "seven",
      },
      {
        number: 8,
        string: "eight",
      },
      {
        number: 9,
        string: "nine",
      },
    ],
  };

  for (let i = 0; i < object.numberResult.length; i++) {
    const numberObj = object.numberResult[i];
    const regex = new RegExp(numberObj.string, 'g');
    s = s.replace(regex, numberObj.number);
  }

  return parseInt(s);
}
