import { createSlice } from '@reduxjs/toolkit';

const shogiInitalState = {
  items: [
    [ {type: "L", owner: 2}, {type: "N", owner: 2}, {type: "S", owner: 2}, {type: "G", owner: 2}, {type: "K", owner: 2}, {type: "G", owner: 2}, {type: "S", owner: 2}, {type: "N", owner: 2}, {type: "L", owner: 2} ],
    [ {type: "E", owner: 0}, {type: "R", owner: 2}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "B", owner: 2}, {type: "E", owner: 0} ],
    [ {type: "P", owner: 2}, {type: "P", owner: 2}, {type: "P", owner: 2}, {type: "P", owner: 2}, {type: "P", owner: 2}, {type: "P", owner: 2}, {type: "P", owner: 2}, {type: "P", owner: 2}, {type: "P", owner: 2} ],
    [ {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0} ],
    [ {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0} ],
    [ {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0} ],
    [ {type: "P", owner: 1}, {type: "P", owner: 1}, {type: "P", owner: 1}, {type: "P", owner: 1}, {type: "P", owner: 1}, {type: "P", owner: 1}, {type: "P", owner: 1}, {type: "P", owner: 1}, {type: "P", owner: 1} ],
    [ {type: "E", owner: 0}, {type: "B", owner: 1}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "E", owner: 0}, {type: "R", owner: 1}, {type: "E", owner: 0} ],
    [ {type: "L", owner: 1}, {type: "N", owner: 1}, {type: "S", owner: 1}, {type: "G", owner: 1}, {type: "K", owner: 1}, {type: "G", owner: 1}, {type: "S", owner: 1}, {type: "N", owner: 1}, {type: "L", owner: 1} ]
  ],
  currentPlayer: 1
}


const shogiSlice = createSlice({
  name: 'shogi',
  initialState: shogiInitalState,
  reducers: {

  },
});

export const shogiActions = shogiSlice.actions;

export default shogiSlice;
