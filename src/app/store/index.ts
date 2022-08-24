import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store'
import { environment } from '../../environments/environment'
import * as fromAuth from './auth/auth.reducer'
import * as fromTeams from './teams/teams.reducer'
import * as fromUsers from './users/users.reducer'

export interface AppState {
  [fromAuth.authFeatureKey]: fromAuth.AuthState
  [fromTeams.teamsFeatureKey]: fromTeams.TeamsState
  [fromUsers.usersFeatureKey]: fromUsers.UserSearchResultsState
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromTeams.teamsFeatureKey]: fromTeams.reducer,
  [fromUsers.usersFeatureKey]: fromUsers.reducer,
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : []
