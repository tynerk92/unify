import { createAction, props } from '@ngrx/store'
import { Auth } from 'src/app/shared/models/app/auth.model'
import { User } from 'src/app/shared/models/db/user.model'

export enum AuthActions {
  LOGIN = '[Login Component] Login',
  LOGIN_SUCCESS = '[Auth Success] Send Login Success',
  LOGIN_FAILURE = '[Auth Failure] Send Login Failure',
}

export const login = createAction(AuthActions.LOGIN, props<{ data: Auth }>())

export const sendLoginSuccess = createAction(
  AuthActions.LOGIN_SUCCESS,
  props<{ data: User }>()
)

export const loginFailure = createAction(
  AuthActions.LOGIN_FAILURE,
  props<{ error: any }>()
)
