
import { createSlice } from '@reduxjs/toolkit';

export const trainerslice = createSlice({
    name: 'Trainer',
    initialState: '',
    reducers: {
        setTrainer: (state, action) => action.payload


    }
})

export const { setTrainer } = trainerslice.actions;

export default trainerslice.reducer;
