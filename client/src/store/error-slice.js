import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    msg: {},
    status: null,
    id:  null
  },
  reducers: {
    get_errors(state, action) {
        const {msg, status, id} = action.payload
        state = {
            msg,
            status,
            id
          }
        
    },
    clear_errors(state, action) {
       state = {}
    }, 
  }
});

export const errorActions = errorSlice.actions;

export default errorSlice;
