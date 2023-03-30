import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from "../data/UserDataSplice";
import userModelDaoReducer from 'src/data/UserModelDaoSplice';
export const store = configureStore({
    reducer: {
        UserDataLogin: userDataReducer,
        userModelDao: userModelDaoReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch