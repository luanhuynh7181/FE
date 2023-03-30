import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

// Define a type for the slice state
export interface UserModelDao {
    model: {}
}
// Define the initial state using that type
export const initialState: UserModelDao = {
    model: {}
}

export const UserModelDaoSlice = createSlice({
    name: 'userModelDao',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setModelUser: (state, action: PayloadAction<UserModelDao>) => {
            state = action.payload;
            return state;
        }
    }
})

export const { setModelUser } = UserModelDaoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUserData = (state: RootState) => state.userModelDao

export default UserModelDaoSlice.reducer