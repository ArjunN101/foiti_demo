import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // console.log("Latitude ", pickerResult.exif.GPSLatitude);
  //   console.log("Longitutde", pickerResult.exif.GPSLongitude);
  //   console.log("Image Width", pickerResult.exif.ImageWidth);
  //   console.log("ImageHeight", pickerResult.exif.ImageLength);
  //   console.log("ImageType", pickerResult.type);
  //   console.log("ImageUri", pickerResult.uri);

  name: "",
  place_id: "",
  images: [],
  fullAddress: "",
  types: [],
  place_id: "",
  address: {},
  coordinates: {},
  caption: "",
};

export const addPlaceSlice = createSlice({
  name: "NEWPLACE",
  initialState,
  reducers: {
    addPlaceData: (state, action) => {
      // console.log("Action", action);
      state.name = action.payload.name;
      state.place_id = action.payload.place_id;
      state.images = action.payload.images;
      state.fullAddress = action.payload.fullAddress;
      state.types = action.payload.types;
      state.address = action.payload.address;
      state.coordinates = action.payload.coordinates;
      state.caption = action.payload.caption;
    },
    updatePlaceData: (state, action) => {
      for (const key in action.payload) {
        state[key] = action.payload[key];
      }
    },
    removePlaceData: (state) => (state = initialState),
  },
});

export const { addPlaceData, removePlaceData, updatePlaceData } =
  addPlaceSlice.actions;

export default addPlaceSlice.reducer;
