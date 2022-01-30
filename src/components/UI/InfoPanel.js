import classes from "./Card.module.css";
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

  return (
    <Card>
        <label> Current player: {shogiCurrentPlayer} | Current Type: {shogiSelectedType} |  Selected RowColumn: {shogiSelectedRow} {shogiSelectedColumn} </label>
    </Card>
  );
};

export default InfoPanel;
