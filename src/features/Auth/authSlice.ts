import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { UserAuth } from 'app/app/services/auth'
import type { RootState } from 'app/app/store'

type AuthState = {
  username: UserAuth | null
}

const slice = createSlice({
  name: 'auth',
  initialState: { username: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user } }: PayloadAction<{ user: UserAuth }>
    ) => {
      state.username = user
    }
  }
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth
