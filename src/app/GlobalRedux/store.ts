'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './Features/auth/authSlice';
import participantsSlice from './Features/participants/participantsSlice';
import leaderboardSlice from './Features/leaderboard/leaderboardSlice';
import gamesResultsSlice from './Features/games/gamesResultsSlice';

const rootReducer = combineReducers({
    auth: authSlice,
    participants: participantsSlice,
    leaderboard: leaderboardSlice,
    gamesResults: gamesResultsSlice
})

export const store = configureStore({
    reducer: rootReducer
})