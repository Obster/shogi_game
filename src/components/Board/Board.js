import { useSelector } from "react-redux";

import classes from "./Board.module.css";
import Tile from "./Tile";

const Board = (props) => {
  const shogiGrid = useSelector((state) => state.shogi.items);

  // map the grid data to tiles
  const fullGrid = shogiGrid.map((row, rowIndex) => {
    return (
      <tr key={rowIndex + "_tr" + Math.random()}>
        {row.map((column, columnIndex) => {
          return (
            <td key={rowIndex + "_" + columnIndex + "_td"} >
              <Tile key={rowIndex + "_" + columnIndex + "_title"} playerNumber={column.owner} tileType={column.type} rowIndex={rowIndex} columnIndex={columnIndex} />
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <div className={classes.board}>
      <table className={classes.table}>
        <tbody>{fullGrid}</tbody>
      </table>
    </div>
  );
};

export default Board;
