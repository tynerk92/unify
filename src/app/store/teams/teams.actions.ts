import { createAction, props } from '@ngrx/store'
import { CreateTeam } from 'src/app/models/app/team.model'
import { Team } from 'src/app/models/db/team.model'

export enum TeamsActions {
  GET_ALL = '[Teams] Get ALl Teams',
  GET_ALL_SUCCESS = '[Teams] Send Teams Get All Success',
  GET_ALL_FAILURE = '[Teams] Send Teams Get All Failure',

  CREATE_TEAM = '[Teams] Create New Team',
  CREATE_TEAM_SUCCESS = '[Teams] Create New Team Success',
  CREATE_TEAM_FAILURE = '[Teams] Create New Team Failure',

  LOAD_TEAMS = '[Teams] Load Teams'
}

export const loadTeams = createAction(TeamsActions.LOAD_TEAMS)

// Get a list of all teams
export const getAllTeams = createAction(TeamsActions.GET_ALL)

export const getAllTeamsSuccess = createAction(
  TeamsActions.GET_ALL_SUCCESS,
  props<{ data: Team[] }>()
)

export const getAllTeamsFailure = createAction(
  TeamsActions.GET_ALL_FAILURE,
  props<{ error: any }>()
)

// Create a new team and add it to the list of all teams
export const createTeam = createAction(
  TeamsActions.CREATE_TEAM,
  props<{ data: CreateTeam }>()
)

export const createTeamSuccess = createAction(
  TeamsActions.CREATE_TEAM_SUCCESS,
  props<{ data: Team }>()
)

export const createTeamFailure = createAction(
  TeamsActions.CREATE_TEAM_FAILURE,
  props<{ error: any }>()
)
