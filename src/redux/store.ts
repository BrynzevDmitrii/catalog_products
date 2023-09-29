

import { configureStore } from "@reduxjs/toolkit"
import modalSlice  from "./modalSlice/modalSlice"
import loginSlice from "./loginSlice/loginSlice"
import productsSlice from "./productsSlice/productsSlice"
import basketSlice from "./basketSlice/basketSlice"

export const store = configureStore({
    reducer: {
       modalSlice,
       loginSlice,
       productsSlice,
       basketSlice,
      
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
  