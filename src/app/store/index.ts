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

export interface AppState {
  [fromAuth.authFeatureKey]: fromAuth.AuthState
  [fromTeams.teamsFeatureKey]: fromTeams.TeamsState
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromTeams.teamsFeatureKey]: fromTeams.reducer,
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : []
