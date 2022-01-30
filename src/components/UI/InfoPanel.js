import { useSelector } from "react-redux";
import Card from "./Card";

const InfoPanel = (props) => {
    const shogiSelectedRow = useSelector(
        (state) => state.shogi.currentlySelectedRow
      );
      const shogiSelectedColumn = useSelector(
        (state) => state.shogi.currentlySelectedColumn
      );
      const shogiSelectedType = useSelector(
        (state) => state.shogi.currentlySelectedType
      );
      const shogiCurrentPlayer = useSelector(
        (state) => state.shogi.currentPlayer
      );
      const shogiLastMoveInfo = useSelector(
        (state) => state.shogi.lastMoveInfo
      );

  return (
    <Card>
        <label> Current player: {shogiCurrentPlayer} | Current Type: {shogiSelectedType} |  Selected RowColumn: {shogiSelectedRow} {shogiSelectedColumn} | Info: {shogiLastMoveInfo} </label>
    </Card>
  );
};

export default InfoPanel;
