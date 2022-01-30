import Board from "./Board";
import classes from "./BoardFrame.module.css";

const BoardFrame = (props) => {
  return (
    <div
      className={`${classes.frame} ${props.className ? props.className : ""}`}
    >
      <Board/>
    </div>
  );
};

export default BoardFrame;
