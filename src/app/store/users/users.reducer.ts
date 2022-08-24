import { Action, createReducer, on } from '@ngrx/store'
import { Team } from 'src/app/models/db/team.model'
import { User } from 'src/app/models/db/user.model'
import * as fromUsersActions from './users.actions'

export const usersFeatureKey = 'users'

export interface UserSearchResultsState {
  users: User[]
  error?: string
}

export const initialState: UserSearchResultsState = {
  users: [],
}

export const reducer = createReducer(
  initialState,
  on(
    fromUsersActions.searchByUsernameSuccess,
    (_: UserSearchResultsState, action: { data: User[] }) => {
      console.log('Found reducer for success.')
      return {
        users: action.data,
      }
    }
  ),
  on(fromUsersActions.searchByUsernameError, () => ({
    users: [],
    error: 'There was an error while performing the search.',
  }))
)
