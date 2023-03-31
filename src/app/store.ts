import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from "../data/ReduxSplice/UserAdminDataSplice";
import userModelDaoReducer from 'src/data/ReduxSplice/UserModelDaoSplice';
import userInfoReducer from 'src/data/ReduxSplice/UserInfoSplice';
export const store = configureStore({
    reducer: {
        userAdminData: userDataReducer,
        userModelDao: userModelDaoReducer,
        userInfo: userInfoReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch