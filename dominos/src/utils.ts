export const sortAsc = (
  dominos: number[][],
  setVal: (key: number[][]) => void
) => {
  dominos.sort((a, b) => {
    if (a[0] + a[1] - (b[0] + b[1]) == 0) {
      return a[0] - b[0];
    }
    return a[0] + a[1] - (b[0] + b[1]);
  });

  setVal([...dominos]);
};

export const sortDesc = (
  dominos: number[][],
  setVal: (key: number[][]) => void
) => {
  dominos.sort((a, b) => {
    if (b[0] + b[1] - (a[0] + a[1]) == 0) {
      return b[0] - a[0];
    }
    return b[0] + b[1] - (a[0] + a[1]);
  });

  setVal([...dominos]);
};

export const removeDuplicate = (
  dominos: number[][],
  setVal: (key: number[][]) => void
) => {
  const countDomino: { [key: string]: number } = {};

  dominos.forEach((domino) => {
    const key =
      domino[0] < domino[1]
        ? domino.join(",")
        : [domino[1], domino[0]].join(",");
    countDomino[key] = (countDomino[key] || 0) + 1;
  });

  const uniqueDominos = dominos.filter((domino) => {
    const key =
      domino[0] < domino[1]
        ? domino.join(",")
        : [domino[1], domino[0]].join(",");
    return countDomino[key] == 1;
  });

  setVal(uniqueDominos);
};

export const countDoubleNumber = (dominos: number[][]) => {
  const doubleCount = dominos.filter(([a, b]) => a == b).length;

  return doubleCount;
};

export const flipNumber = (
  dominos: number[][],
  setVal: (key: number[][]) => void
) => {
  const flip = dominos.map(([a, b]) => [b, a]);

  setVal(flip);
};

export const removeTotalNumber = (
  inputNumber: number | "",
  dominos: number[][],
  setVal: (key: number[][]) => void,
  setNotMatch: (key: boolean) => void
) => {
  if (inputNumber === "") return;
  const resultNumber = Number(inputNumber);
  const resultDominos = dominos.filter((dominos) => {
    const sum = dominos[0] + dominos[1];
    return sum != resultNumber;
  });

  setVal(resultDominos);

  if (resultDominos.length === dominos.length) {
    setNotMatch(true);
  } else {
    setNotMatch(false);
  }
};
