import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    itemsList: [],
    isItemLoading: false
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      state.itemsList = state.itemsList.concat({
        name: newItem.name,
        id: newItem.id,
      });
    },
    deleteItem(state, action) {
      const id = action.payload;
      state.itemsList = state.itemsList.filter((item) => item.id !== id);
    },
    addItems(state, action){
      state.itemsList.push(action.payload)
    },
    isItemLoading(state, action){
      if(action.payload){
        state.isItemLoading = action.payload

      }else{
      state.isItemLoading = !state.isItemLoading
    }
    }
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice;
