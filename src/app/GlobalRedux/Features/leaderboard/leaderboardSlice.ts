'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ILeaderboard } from '@/utils/interfaces/types'

//initialState
const initialState = {
    leaderboard: null as ILeaderboard | null
}

//slice
export const leaderbaordSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        setReduxLeaderboard: (state, action: PayloadAction<ILeaderboard>) => { state.leaderboard = action.payload }
    }
})

//actions
export const { setReduxLeaderboard } = leaderbaordSlice.actions

//selectors
export const selectLeaderboard = (state: any) => state.leaderboard.leaderboard

//reducer
export default leaderbaordSlice.reducer