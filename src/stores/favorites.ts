import { createSlice } from "@reduxjs/toolkit";

const favoritesInitialState = [] as Character[];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.find((c) => c.id === action.payload.id))
        state.push(action.payload);
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
