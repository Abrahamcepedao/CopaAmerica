'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IGameResults, IGame } from '@/utils/interfaces/types'

//initialState
const initialState = {
    gamesResults: null as IGameResults | null,
    games: [] as IGame[]
}

//slice
export const gamesResultsSlice = createSlice({
    name: 'gamesResults',
    initialState,
    reducers: {
        setReduxGamesResults: (state, action: PayloadAction<IGameResults>) => { state.gamesResults = action.payload },
        setReduxGames: (state, action: PayloadAction<IGame[]>) => { state.games = action.payload }
    }
})

//actions
export const { setReduxGamesResults, setReduxGames } = gamesResultsSlice.actions

//selectors
export const selectGamesResults = (state: any) => state.gamesResults.gamesResults
export const selectGames = (state: any) => state.gamesResults.games

//reducer
export default gamesResultsSlice.reducer