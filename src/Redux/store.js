import { configureStore } from "@reduxjs/toolkit";
import addAddressReducer from "./slices/addAddressSlice";
import AddPlaceReducer from "./slices/addPlaceSlice";

export default configureStore({
  reducer: {
    NEWPLACE: AddPlaceReducer,
    ADD_ADDRESS: addAddressReducer,
  },
});
