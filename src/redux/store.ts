import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/admin/category/categorySlice"
import { baseApi } from "./api/baseApi";
export const store=configureStore({
    
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        category:categoryReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch