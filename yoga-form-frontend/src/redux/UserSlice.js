import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userData: (state,action) => {
      state.currentUser = action.payload;
    }
  }
});

export const { userData } = userSlice.actions;
export default userSlice.reducer;