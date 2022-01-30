import { shogiActions } from "./shogi-slice";

export const calculateTiles = (oldRowIndex, oldColumnIndex, oldTileType, currentPlayer) => {
  return (dispatch) => {
    let validTiles = [];
    switch (oldTileType) {
      case "B":
        let currentStep = 1;
        for (let i = oldColumnIndex - 1; i > -1; i--) {
          validTiles.push({ row: oldRowIndex + currentStep, column: i });
          validTiles.push({ row: oldRowIndex - currentStep, column: i });
          currentStep++;
        }
        currentStep = 1;
        for (let i = oldColumnIndex + 1; i < 9; i++) {
          validTiles.push({ row: oldRowIndex + currentStep, column: i });
          validTiles.push({ row: oldRowIndex - currentStep, column: i });
          currentStep++;
        }
        break;
      case "G":
        if (currentPlayer === 1) {
          for (let i = oldRowIndex - 1; i < oldRowIndex + 1; i++) {
            for (let j = oldColumnIndex - 1; j < oldColumnIndex + 2; j++) {
              if (i < 9 && j < 9 && i > -1 && j > -1 && (i !== oldRowIndex || j !== oldColumnIndex)) {
                validTiles.push({ row: i, column: j });
              }
            }
          }
          if (oldRowIndex > -1) {
            validTiles.push({ row: oldRowIndex + 1, column: oldColumnIndex });
          }
        } else {
          for (let i = oldRowIndex; i < oldRowIndex + 2; i++) {
            for (let j = oldColumnIndex - 1; j < oldColumnIndex + 2; j++) {
              if (i < 9 && j < 9 && i > -1 && j > -1 && (i !== oldRowIndex || j !== oldColumnIndex)) {
                validTiles.push({ row: i, column: j });
              }
            }
          }
          if (oldRowIndex < 9) {
            validTiles.push({ row: oldRowIndex - 1, column: oldColumnIndex });
          }
        }
        break;
      case "K":
        for (let i = oldRowIndex - 1; i < oldRowIndex + 2; i++) {
          for (let j = oldColumnIndex - 1; j < oldColumnIndex + 2; j++) {
            if (i < 9 && j < 9 && i > -1 && j > -1 && (i !== oldRowIndex || j !== oldColumnIndex)) {
              validTiles.push({ row: i, column: j });
            }
          }
        }
        break;
      case "N":
        if (currentPlayer === 1) {
          for (let i = oldColumnIndex - 1; i < oldColumnIndex + 2; i += 2) {
            if (oldRowIndex - 2 > -1 && i < 9 && i > -1) {
              validTiles.push({ row: oldRowIndex - 2, column: i });
            }
          }
        } else {
          for (let i = oldColumnIndex - 1; i < oldColumnIndex + 2; i += 2) {
            if (oldRowIndex + 2 < 9 && i < 9 && i > -1) {
              validTiles.push({ row: oldRowIndex + 2, column: i });
            }
          }
        }
        break;
      case "L":
        if (currentPlayer === 1) {
          for (let i = oldRowIndex - 1; i > -1; i--) {
            validTiles.push({ row: i, column: oldColumnIndex });
          }
        } else {
          for (let i = oldRowIndex + 1; i < 9; i++) {
            validTiles.push({ row: i, column: oldColumnIndex });
          }
        }
        break;
      case "P":
        if (currentPlayer === 1 && oldRowIndex - 1 > -1) {
          validTiles.push({ row: oldRowIndex - 1, column: oldColumnIndex });
        } else if (currentPlayer === 2 && oldRowIndex + 1 < 9) {
          validTiles.push({ row: oldRowIndex + 1, column: oldColumnIndex });
        }
        break;
      case "R":
        for (let i = 0; i < 9; i++) {
          validTiles.push({ row: i, column: oldColumnIndex });
          validTiles.push({ row: oldRowIndex, column: i });
        }
        break;
      case "S":
        if (currentPlayer === 1) {
          for (let i = oldRowIndex - 1; i < oldRowIndex + 1; i++) {
            for (let j = oldColumnIndex - 1; j < oldColumnIndex + 2; j++) {
              if (i < 9 && j < 9 && i > -1 && j > -1 && (i !== oldRowIndex || j !== oldColumnIndex)) {
                validTiles.push({ row: i, column: j });
              }
            }
          }
          if (oldRowIndex + 1 > -1) {
            if (oldColumnIndex + 1 < 9) {
              validTiles.push({ row: oldRowIndex + 1, column: oldColumnIndex + 1 });
            }
            if (oldColumnIndex - 1 > -1) {
              validTiles.push({ row: oldRowIndex + 1, column: oldColumnIndex - 1 });
            }
          }
        } else {
          for (let i = oldRowIndex; i < oldRowIndex + 2; i++) {
            for (let j = oldColumnIndex - 1; j < oldColumnIndex + 2; j++) {
              if (i < 9 && j < 9 && i > -1 && j > -1 && (i !== oldRowIndex || j !== oldColumnIndex)) {
                validTiles.push({ row: i, column: j });
              }
            }
          }
          if (oldRowIndex - 1 < 9) {
            if (oldColumnIndex + 1 < 9) {
              validTiles.push({ row: oldRowIndex - 1, column: oldColumnIndex + 1 });
            }
            if (oldColumnIndex - 1 > -1) {
              validTiles.push({ row: oldRowIndex - 1, column: oldColumnIndex - 1 });
            }
          }
        }
        break;
      default:
    }

    dispatch(shogiActions.setValidTitles({ validTiles: validTiles }));
  };
};

export const determineValidMove = (newRowIndex, newColumnIndex, newTileType, oldRowIndex, oldColumnIndex, oldTileType, currentPlayer, validTiles) => {
  return (dispatch) => {
    let determineValidity = false;

    if (newTileType !== "E") {
      // reset selection
      dispatch(
        shogiActions.changeCurrentlySelected({
          rowIndex: -1,
          columnIndex: -1,
          tileType: "",
        })
      );
      return;
    }

    for (let i = 0; i < validTiles.length; i++) {
      if (validTiles[i].row === newRowIndex && validTiles[i].column === newColumnIndex) {
        determineValidity = true;
      }
    }

    if (determineValidity) {
      dispatch(
        shogiActions.moveSelectedItem({
          newRowIndex,
          newColumnIndex,
          newTileType,
          oldRowIndex,
          oldColumnIndex,
          oldTileType,
          currentPlayer,
        })
      );
    }
  };
};
