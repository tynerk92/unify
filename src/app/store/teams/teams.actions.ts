import { createAction, props } from '@ngrx/store'
import { CreateTeam } from 'src/app/models/app/team.model'
import { Team } from 'src/app/models/db/team.model'

export enum TeamsActions {
  GET_ALL = '[Teams] Get ALl Teams',
  GET_ALL_SUCCESS = '[Teams] Send Teams Get All Success',
  GET_ALL_FAILURE = '[Teams] Send Teams Get All Failure',
}

export const loadTeams = createAction('[Teams] Load Teams')

export const getAllTeams = createAction(TeamsActions.GET_ALL)

export const sendTeamsGetAllSuccess = createAction(
  TeamsActions.GET_ALL_SUCCESS,
  props<{ data: Team[] }>()
)

export const sendTeamsGetAllFailure = createAction(
  TeamsActions.GET_ALL_FAILURE,
  props<{ error: any }>()
)
