import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => ({
            ...state,
            currentUser: action.payload
        })
    }
})

export const userReducer = userSlice.reducer;

// This is setting the action key as setCurrentUser
export const { setCurrentUser } = userSlice.actions;

export const selectCurrentUser = (state) => state.user.currentUser;