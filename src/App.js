import React from "react";

import { useSelector } from "react-redux";
import classes from "./App.module.css";
import BoardFrame from "./components/Board/BoardFrame";
import InfoPanel from "./components/UI/InfoPanel";

function App() {

  return (
    <div className={classes.flexbox}>
      <InfoPanel playerNumber='1 (Bottom)' />
      <BoardFrame />
      <InfoPanel playerNumber='2 (Top)' />
    </div>
  );
}

export default App;
