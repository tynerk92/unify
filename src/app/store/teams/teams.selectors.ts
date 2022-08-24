import { createFeatureSelector, createSelector } from '@ngrx/store'
import { Team } from 'src/app/models/db/team.model'
import { teamsFeatureKey, TeamsState } from './teams.reducer'

export const selectTeamsFeature =
  createFeatureSelector<TeamsState>(teamsFeatureKey)

export const selectAllTeams = createSelector(
  selectTeamsFeature,
  (teamsState: TeamsState): Team[] => teamsState.teams
)
