import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  country: "",
};

export const addAddressSlice = createSlice({
  name: "ADD_ADDRESS",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.name = action.payload.name;
      state.country = action.payload.country;
    },
    removeAddress: (state) => (state = initialState),
  },
});

export const { addAddress, removeAddress } = addAddressSlice.actions;

export default addAddressSlice.reducer;
