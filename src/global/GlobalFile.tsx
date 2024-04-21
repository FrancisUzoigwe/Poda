import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pop: false,
    toggle: false
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
        },
        toggled: (state: any) => {
            state.toggle = true
        },
        changedToggled: (state: any) => {
            state.toggle = false
        }
    }
});

export const { popped, changedPop, changedToggled, toggled } = GlobalFile.actions

export default GlobalFile.reducer