import { useSelector } from "react-redux";
import Card from "./Card";
import classes from "./InfoPanel.module.css";

const InfoPanel = (props) => {
  const shogiSelectedRow = useSelector((state) => state.shogi.currentlySelectedRow);
  const shogiSelectedColumn = useSelector((state) => state.shogi.currentlySelectedColumn);
  const shogiSelectedType = useSelector((state) => state.shogi.currentlySelectedType);
  const shogiCurrentPlayer = useSelector((state) => state.shogi.currentPlayer);
  const shogiLastMoveInfo = useSelector((state) => state.shogi.lastMoveInfo);

  let isCurrentPlayer = shogiCurrentPlayer === Number(props.playerNumber[0]);

  return (
    <Card className={classes.Card}>
      <label className={`${classes.currentPlayer} ${isCurrentPlayer ? classes.activePlayer : ""}`}>
        <h3>Player {props.playerNumber}</h3>
      </label>
      <br></br>
      {isCurrentPlayer ? (
        <div>
          <label>
            <h4>{!shogiSelectedType ? "Select a piece!" : "Selected piece is a " + shogiSelectedType}</h4>
          </label>
          <label>
            <h4>{shogiSelectedRow !== -1 ? "Selected piece is located at {" + shogiSelectedRow + ";" + shogiSelectedColumn + "}" : ""}</h4>
          </label>
          <label>
            <h4>{shogiLastMoveInfo}</h4>
          </label>
        </div>
      ) : (
        ""
      )}
    </Card>
  );
};

export default InfoPanel;
