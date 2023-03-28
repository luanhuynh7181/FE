import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

// Define a type for the slice state
export interface UserData {
    ticket: string
}
// Define the initial state using that type
export const initialState: UserData = {
    ticket: ""
}

export const UserDataSlice = createSlice({
    name: 'user_data',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setUser: (state, action: PayloadAction<UserData>) => {
            state = action.payload;
            return state;
        }
    }
})

export const { setUser } = UserDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUserData = (state: RootState) => state.userData

export default UserDataSlice.reducer