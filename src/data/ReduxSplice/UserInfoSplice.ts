import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface UserInfo {
    gold: number,
    username: string,
    displayName: string,
    nPaying: number,
    vipLevel: number,
    vipPoint: number,
    diamond: number,
    uniqueID: number,
    level: number,
    // "avatarURL": "",
    // "defaultAvatar": "",
    // "exp": 0,
    // "vipExpiredTime": 0,
    // "energy": 0,
    // "eTicket": 0,
    // "canClaimRewardOldUser": false,
    // "isPlaying": 0,
    // "nLocalPayment": 0,
    // "totalPaid": 0,
    // "timeDelete": -1,
    // "isValidReferral": false,
    // "referrerId": 0,
    // "coinPromo": 0,
    // "coinCash": 0,
    // "coinConsume": 0,
    // "createTime": 1680235127,
    // "lastLoginTime": 1680488916,
    // "lastPayCoinTime": 0,
    // "lastLevelUpTime": 1680235127,
    // "userID": 106219740,
    // "lastModifiedTime": 1680488918

}
export const initialState: UserInfo = {
    gold: 0,
    username: "",
    displayName: "",
    nPaying: 0,
    vipLevel: 0,
    vipPoint: 0,
    diamond: 0,
    uniqueID: 0,
    level: 0,
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