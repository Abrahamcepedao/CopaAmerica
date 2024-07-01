'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IUser } from '@/utils/interfaces/types'

//initialState
const initialState = {
    participants: [] as IUser[],
    editParticipant: null as IUser | null
}

//slice
export const participantsSlice = createSlice({
    name: 'participants',
    initialState,
    reducers: {
        setReduxParticipants: (state, action: PayloadAction<IUser[]>) => { state.participants = action.payload },
        setReduxEditParticipant: (state, action: PayloadAction<IUser>) => { state.editParticipant = action.payload }
    }
})

//actions
export const { setReduxParticipants, setReduxEditParticipant } = participantsSlice.actions

//selectors
export const selectParticipants = (state: any) => state.participants.participants
export const selectEditParticipant = (state: any) => state.participants.editParticipant

//reducer
export default participantsSlice.reducer