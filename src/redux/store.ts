

import { configureStore } from "@reduxjs/toolkit"
import modalSlice  from "./modalSlice/modalSlice"

export const store = configureStore({
    reducer: {
       modalSlice,
      
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
  
  
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
  