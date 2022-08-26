import { createFeatureSelector, createSelector } from '@ngrx/store'
import { User } from 'src/app/models/db/user.model'
import { UserSearchResultsState, usersFeatureKey } from './users.reducer'

export const selectUsersFeature =
  createFeatureSelector<UserSearchResultsState>(usersFeatureKey)

export const searchForUserByPartialUsername = createSelector(
  selectUsersFeature,
  (userSearchResultsState: UserSearchResultsState): User[] =>
    userSearchResultsState.users
)

export const allUsers = createSelector(
  selectUsersFeature,
  (userSearchResultsState: UserSearchResultsState): User[] =>
    userSearchResultsState.users
)
