import { createAction, props } from '@ngrx/store'
import { Auth } from 'src/app/models/app/auth.model'
import { User } from 'src/app/models/db/user.model'

export enum AuthActions {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',

  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_FAILURE = '[Auth] Logout Failure',
}

export const login = createAction(AuthActions.LOGIN, props<{ data: Auth }>())

export const loginSuccess = createAction(
  AuthActions.LOGIN_SUCCESS,
  props<{ data: User }>()
)

export const loginFailure = createAction(
  AuthActions.LOGIN_FAILURE,
  props<{ error: any }>()
)

export const logout = createAction(AuthActions.LOGOUT)
