import { useDispatch, useSelector } from "react-redux";
import classes from "./Tile.module.css";
import { shogiActions } from "../../store/shogi-slice";
import { determineValidMove, calculateTiles } from "../../store/shogi-actions";
import { useEffect, useState } from "react";

const Tile = (props) => {
  const dispatch = useDispatch();
  const shogiSelectedRow = useSelector((state) => state.shogi.currentlySelectedRow);
  const shogiSelectedColumn = useSelector((state) => state.shogi.currentlySelectedColumn);
  const shogiSelectedType = useSelector((state) => state.shogi.currentlySelectedType);
  const shogiCurrentPlayer = useSelector((state) => state.shogi.currentPlayer);
  const shogiValidTile = useSelector((state) => state.shogi.validTiles);

  const [isColoredTitle, setIsColoredTitle] = useState(false);

  let renderImg = "";

  // update valid tile move colors
  useEffect(() => {
    setIsColoredTitle(false);

    if(props.tileType !== "E") {
        return;
    }

    for(let i = 0; i < shogiValidTile.length; i++) {
        if(shogiValidTile[i].row === props.rowIndex && shogiValidTile[i].column === props.columnIndex) {
            setIsColoredTitle(true);
            return;
        }
    }
    setIsColoredTitle(false);
  }, [shogiValidTile, props.tileType, props.rowIndex, props.columnIndex])

  // set the img correctly
  switch (props.tileType) {
    case "B":
      renderImg = "/graphics/bishop.png";
      break;
    case "G":
      renderImg = "/graphics/gold.png";
      break;
    case "K":
      renderImg = "/graphics/king.png";
      break;
    case "N":
      renderImg = "/graphics/knight.png";
      break;
    case "L":
      renderImg = "/graphics/lance.png";
      break;
    case "P":
      renderImg = "/graphics/pawn.png";
      break;
    case "R":
      renderImg = "/graphics/rook.png";
      break;
    case "S":
      renderImg = "/graphics/silver.png";
      break;
    default:
  }

  function selectionHandler(rowIndex, columnIndex, tileType, shogiSelectedRow, shogiSelectedColumn, shogiSelectedType, shogiCurrentPlayer) {
    // wrong player -> return
    if (props.playerNumber !== shogiCurrentPlayer && props.playerNumber !== 0) {
      dispatch(shogiActions.setLastMoveInfo({lastMoveInfo: "Wrong player!"}));
      return;
    }

    dispatch(shogiActions.setLastMoveInfo({lastMoveInfo: ""}));

    // if this is our second selection -> check if we can do it
    if (shogiSelectedRow !== -1) {
      dispatch(determineValidMove(rowIndex, columnIndex, tileType, shogiSelectedRow, shogiSelectedColumn, shogiSelectedType, shogiCurrentPlayer, shogiValidTile));
    } else if (tileType !== "E") { // if this is our first selection
        
      dispatch(shogiActions.changeCurrentlySelected({ rowIndex, columnIndex, tileType }));
      dispatch(calculateTiles(rowIndex, columnIndex, tileType, shogiCurrentPlayer));
    }
  }

  return (
    <button
      onClick={() =>
        selectionHandler(props.rowIndex, props.columnIndex, props.tileType, shogiSelectedRow, shogiSelectedColumn, shogiSelectedType, shogiCurrentPlayer, shogiValidTile)
      }
      className={`${classes.tile} ${props.tileType !== "E" ? classes.pointer : ""} ${isColoredTitle ? classes.coloredTitle : ""}`}
    >
      {renderImg && <img alt='' className={`${classes.img} ${props.playerNumber !== 1 ? classes.rotateImage : ""}`} src={renderImg} width='70vh' />}{" "}
    </button>
  );
};

export default Tile;
