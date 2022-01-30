import { configureStore } from "@reduxjs/toolkit";

import shogiSlice from "./shogi-slice";

const store = configureStore({
  reducer: { shogi: shogiSlice.reducer },
});

export default store;
