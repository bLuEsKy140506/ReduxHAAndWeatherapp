import { createSlice } from "@reduxjs/toolkit";
import cities from "./data/worldcities.json"; //CREDIT TO 🫡 https://simplemaps.com/static/data/world-cities/basic/simplemaps_worldcities_basicv1.76.zip &
//                                            //          🫡  https://products.aspose.app/cells/conversion/excel-to-json
const citySlice = createSlice({
  name: "weather",
  initialState: {
    cities: cities,
  },
});

export default citySlice.reducer;
