import { createSlice } from "@reduxjs/toolkit";

const shogiInitalState = {
  items: [
    [
      { type: "L", owner: 2 },
      { type: "N", owner: 2 },
      { type: "S", owner: 2 },
      { type: "G", owner: 2 },
      { type: "K", owner: 2 },
      { type: "G", owner: 2 },
      { type: "S", owner: 2 },
      { type: "N", owner: 2 },
      { type: "L", owner: 2 },
    ],
    [
      { type: "E", owner: 0 },
      { type: "R", owner: 2 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "B", owner: 2 },
      { type: "E", owner: 0 },
    ],
    [
      { type: "P", owner: 2 },
      { type: "P", owner: 2 },
      { type: "P", owner: 2 },
      { type: "P", owner: 2 },
      { type: "P", owner: 2 },
      { type: "P", owner: 2 },
      { type: "P", owner: 2 },
      { type: "P", owner: 2 },
      { type: "P", owner: 2 },
    ],
    [
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
    ],
    [
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
    ],
    [
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
    ],
    [
      { type: "P", owner: 1 },
      { type: "P", owner: 1 },
      { type: "P", owner: 1 },
      { type: "P", owner: 1 },
      { type: "P", owner: 1 },
      { type: "P", owner: 1 },
      { type: "P", owner: 1 },
      { type: "P", owner: 1 },
      { type: "P", owner: 1 },
    ],
    [
      { type: "E", owner: 0 },
      { type: "B", owner: 1 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "E", owner: 0 },
      { type: "R", owner: 1 },
      { type: "E", owner: 0 },
    ],
    [
      { type: "L", owner: 1 },
      { type: "N", owner: 1 },
      { type: "S", owner: 1 },
      { type: "G", owner: 1 },
      { type: "K", owner: 1 },
      { type: "G", owner: 1 },
      { type: "S", owner: 1 },
      { type: "N", owner: 1 },
      { type: "L", owner: 1 },
    ],
  ],
  currentPlayer: 1,
  currentlySelectedRow: -1,
  currentlySelectedColumn: -1,
  currentlySelectedType: "",
  validTiles: [],
  lastMoveInfo: "",
  playerOnePieces: 20,
  playerTwoPieces: 20
};

const shogiSlice = createSlice({
  name: "shogi",
  initialState: shogiInitalState,
  reducers: {
    changeCurrentlySelected(state, action) {
      state.currentlySelectedRow = action.payload.rowIndex;
      state.currentlySelectedColumn = action.payload.columnIndex;
      state.currentlySelectedType = action.payload.tileType;
    },
    moveSelectedItem(state, action) {
      // newRowIndex, newColumnIndex, newTileType, oldRowIndex, oldColumnIndex, oldTileType, currentPlayer
      state.currentPlayer = action.payload.currentPlayer === 1 ? 2 : 1;
      const tmpCopy = Object.create(state.items[action.payload.newRowIndex][action.payload.newColumnIndex]);
      state.items[action.payload.newRowIndex][action.payload.newColumnIndex] = state.items[action.payload.oldRowIndex][action.payload.oldColumnIndex];
      state.items[action.payload.oldRowIndex][action.payload.oldColumnIndex] = tmpCopy;

      state.currentlySelectedRow = -1;
      state.currentlySelectedColumn = -1;
      state.currentlySelectedType = "";
      state.validTiles = [];
    },
    setValidTitles(state, action) {
      state.validTiles = action.payload.validTiles;
    },
    setLastMoveInfo(state, action) {
      state.lastMoveInfo = action.payload.lastMoveInfo;
    },
  },
});

export const shogiActions = shogiSlice.actions;

export default shogiSlice;
