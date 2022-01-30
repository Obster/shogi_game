import { useSelector } from 'react-redux';

import classes from "./Board.module.css";
import Tile from "./Tile";

const Board = (props) => {
  const shogiGrid = useSelector((state) => state.shogi.items);


  const fullGrid = shogiGrid.map((row) => {
    return <tr>
        {row.map((column) => {
          return <td> <Tile/> </td>
        })}
    </tr>
  })

    
  return (
    <div className={classes.board}>
        <table className={classes.table}>
          <tbody>
          {fullGrid}
          </tbody>
        </table>
    </div>
  );
};

export default Board;
