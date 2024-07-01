'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//interfaces
import { IUser } from '@/utils/interfaces/types'

//initialState
const initialState = {
    user: null as IUser | null
}

//slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setReduxUser: (state, action: PayloadAction<IUser | null>) => { state.user = action.payload }
    }
})


//actions
export const { setReduxUser } = authSlice.actions

//selectors
export const selectUser = (state: any) => state.auth.user

//reducer
export default authSlice.reducer