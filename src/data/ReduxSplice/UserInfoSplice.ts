import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface UserInfo {

}
export const initialState: UserInfo = {

}

export const UserInfoSplice = createSlice({
    name: 'UserInfo',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<UserInfo>) => {
            state = action.payload;
            return state;
        }
    }
})

export const { setUserInfo } = UserInfoSplice.actions

export const selectUserData = (state: RootState) => state.userInfo

export default UserInfoSplice.reducer;