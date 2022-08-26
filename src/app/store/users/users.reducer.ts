import { Action, createReducer, on } from '@ngrx/store'
import { Team } from 'src/app/models/db/team.model'
import { User } from 'src/app/models/db/user.model'
import { UserList } from 'src/app/views/admin/users/users.service'
import * as fromUsersActions from './users.actions'

export const usersFeatureKey = 'users'

export interface UserSearchResultsState {
  users: User[]
  count: number
  error?: string
}

export const initialState: UserSearchResultsState = {
  users: [],
  count: 0,
}

export const reducer = createReducer(
  initialState,
  on(
    fromUsersActions.searchByUsernameSuccess,
    (_: UserSearchResultsState, action: { data: UserList }) => {
      return {
        users: action.data.users,
        count: action.data.count,
      }
    }
  ),
  on(fromUsersActions.searchByUsernameError, () => ({
    users: [],
    count: 0,
    error: 'There was an error while performing the search.',
  })),
  on(
    fromUsersActions.getAllUsersSuccess,
    (_: UserSearchResultsState, action: { data: UserList }) => {
      return {
        users: action.data.users,
        count: action.data.count,
      }
    }
  )
)
