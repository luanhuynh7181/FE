import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface UserAdminData {
    ticket: string
    id: string,
    name: string
    email: string
    token: string
}
export const initialState: UserAdminData = {
    ticket: "",
    id: "",
    name: "",
    email: "",
    token: "",
}

export const UserDataSlice = createSlice({
    name: 'user_data',
    initialState,
    reducers: {
        setUserDataLogin: (state, action: PayloadAction<UserAdminData>) => {
            state = action.payload;
            return state;
        }
    }
})

export const { setUserDataLogin } = UserDataSlice.actions

export const selectUserData = (state: RootState) => state.userAdminData

export default UserDataSlice.reducer