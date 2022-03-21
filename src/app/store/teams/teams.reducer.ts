import { Action, createReducer, on } from '@ngrx/store'
import { Team } from 'src/app/models/db/team.model'
import * as fromTeamsActions from './teams.actions'

export const teamsFeatureKey = 'teams'

export interface TeamsState {
  teams: Team[]
}

export const initialState: TeamsState = {
  teams: [],
}

export const reducer = createReducer(
  initialState,
  on(
    fromTeamsActions.sendTeamsGetAllSuccess,
    (state: TeamsState, action: { data: Team[] }) => ({
      teams: action.data,
    })
  ),
  on(fromTeamsActions.sendTeamsGetAllFailure, (state: TeamsState, action) => ({
    teams: [],
  }))
)
