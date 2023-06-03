import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null
}
const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    setcurrentuser(state, action){
      state.currentUser = action.payload
    }
  }
})

export const {setcurrentuser} = userSlice.actions

export default userSlice.reducer
