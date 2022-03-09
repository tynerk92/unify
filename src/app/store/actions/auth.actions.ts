import { createAction, props } from '@ngrx/store'
import { Auth } from 'src/app/shared/models/app/auth.model'
import { User } from 'src/app/shared/models/db/user.model'

export const login = createAction(
  '[Login Component] Login',
  props<{ data: Auth }>()
)

export const sendLoginStatus = createAction(
  '[Auth Success] Send Login Success',
  props<{ data: User }>()
)

export const loginFailure = createAction(
  '[Auth Failure] Send Login Failure',
  props<{ error: any }>()
)
