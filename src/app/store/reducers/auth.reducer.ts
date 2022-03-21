import { createReducer, on } from '@ngrx/store'
import { User } from 'src/app/models/db/user.model'
import * as fromAuthActions from '../actions/auth.actions'

export const authFeatureKey = 'auth'

export interface AuthState {
  user: User | null
}

export const initialState: AuthState = {
  user: {} as User,
}

export const reducer = createReducer(
  initialState,
  on(fromAuthActions.login, (state) => ({ ...state })),
  on(fromAuthActions.sendLoginSuccess, (state, action) => ({
    ...state,
    user: action.data,
  })),
  on(fromAuthActions.loginFailure, (state, action) => ({
    ...state,
    user: null,
  }))
)
