function makeWord(lettersObject) {
  const values = Object.values(lettersObject).reduce((acc, val) => {
    acc.push(...val);
    return acc;
  }, []);

  const array = values.map((val) => val);
  values.forEach((_, idx) => {
    array[idx] = Object.keys(lettersObject).find((key) =>
      lettersObject[key].includes(idx)
    );
  });

  return array;
}

console.log(
  makeWord({ H: [0], e: [1], l: [2, 3, 8], o: [4, 6], W: [5], r: [7], d: [9] })
);
