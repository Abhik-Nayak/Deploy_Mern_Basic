export const isColumnOfFour = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnOfFour: number
) => {
  for (let i: number = 0; i <= formulaForColumnOfFour; i++) {
    const columnOfFour: number[] = [
      i,
      i + boardSize,
      i + boardSize * 2,
      i + boardSize * 3,
    ];
    const decidedColor: string = newBoard[i];

    const isBlank: boolean = newBoard[i] === "";

    if (
      columnOfFour.every(
        (candy: number) => newBoard[candy] === decidedColor && !isBlank
      )
    ) {
      columnOfFour.forEach((candy: number) => (newBoard[candy] = ""));
      return false;
    }
  }
};

export const isColumnOfThree = (
    newBoard: string[],
    boardSize: number,
    formulaForColumnOfThree: number
  ) => {
    for (let i: number = 0; i <= formulaForColumnOfThree; i++) {
      const columnOfThree: number[] = [
        i,
        i + boardSize,
        i + boardSize * 2
      ];
      const decidedColor: string = newBoard[i];
  
      const isBlank: boolean = newBoard[i] === "";
  
      if (
        columnOfThree.every(
          (candy: number) => newBoard[candy] === decidedColor && !isBlank
        )
      ) {
        columnOfThree.forEach((candy: number) => (newBoard[candy] = ""));
        return false;
      }
    }
  };
