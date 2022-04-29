import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

// Resgister user
export const resgister = createAsyncThunk('auth/register', async (user, thunkAPI)=>{
  try{
    return await authService.resgister(user)

  }catch(error){

    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)

  }

})

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    reset(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(resgister.pending, (state)=>{
      state.isLoading =true
    })
    .addCase(resgister.fulfilled, (state, action)=>{
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    .addCase(resgister.rejected, (state, action)=>{
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
  }
});

export const {reset} = authSlice.actions;

export default authSlice;
