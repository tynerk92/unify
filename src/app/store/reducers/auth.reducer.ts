import { Action, createReducer, on } from '@ngrx/store'
import { User } from 'src/app/shared/models/db/user.model'
import * as fromAuthActions from '../actions/auth.actions'

export const authFeatureKey = 'auth'

export interface State {
  user: User | null
}

export const initialState: State = {
  user: null,
}

export const reducer = createReducer(
  initialState,
  on(fromAuthActions.login, (state) => ({ ...state })),
  on(fromAuthActions.sendLoginStatus, (state, action) => ({
    ...state,
    user: action.data,
  }))
)
