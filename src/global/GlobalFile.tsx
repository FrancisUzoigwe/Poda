import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pop: false
}

const GlobalFile = createSlice({
    name: "state",
    initialState,
    reducers: {
        popped: (state: any) => {
            state.pop = true
        },
        changedPop: (state: any) => {
            state.pop = false
        }
    }
});

export const { popped, changedPop } = GlobalFile.actions

export default GlobalFile.reducer