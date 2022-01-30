import React, { Fragment } from "react";

import BoardFrame from "./components/Board/BoardFrame";
import InfoPanel from "./components/UI/InfoPanel";


function App() {
  return (
    <Fragment>
        <InfoPanel/>
        <BoardFrame />
    </Fragment>
      
  );
}

export default App;
