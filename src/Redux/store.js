import { configureStore } from "@reduxjs/toolkit";
import AddPlaceReducer from "./slices/addPlaceSlice";

export default configureStore({
  reducer: {
    NEWPLACE: AddPlaceReducer,
  },
});
