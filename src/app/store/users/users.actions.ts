import { createAction, props } from '@ngrx/store'
import { CreateTeam } from 'src/app/models/app/team.model'
import { User } from 'src/app/models/db/user.model'

export enum UsersActions {
  GET_USERS = '[Users] Get Users With A Cursor',
  GET_USERS_SUCCESS = '[Users] Get Users Success',
  GET_USERS_ERROR = '[Users] Get Users Error',

  SEARCH_USERS = '[Users] Search With Autocomplete',
  SEARCH_USERS_SUCCESS = '[Users] Search Found Results',
  SEARCH_ERROR = '[Users] Search Error',
}

export const getAllUsers = createAction(
  UsersActions.GET_USERS,
  props<{ page: number; perPage: number }>()
)

export const getAllUsersSuccess = createAction(
  UsersActions.GET_USERS_SUCCESS,
  props<{ data: User[] }>()
)
export const getAllUsersError = createAction(
  UsersActions.GET_USERS_ERROR,
  props<{ error: any }>()
)

// Search by username using autocomplete
export const searchUsersAutocomplete = createAction(UsersActions.SEARCH_USERS)

export const searchByUsername = createAction(
  UsersActions.SEARCH_USERS,
  props<{ searchTerm: string }>()
)

export const searchByUsernameSuccess = createAction(
  UsersActions.SEARCH_USERS_SUCCESS,
  props<{ data: User[] }>()
)

export const searchByUsernameError = createAction(
  UsersActions.SEARCH_ERROR,
  props<{ error: any }>()
)
