import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { Team } from 'src/app/models/db/team.model'
import { TeamsService } from 'src/app/views/admin/teams.service'
import * as fromTeamsActions from './teams.actions'

@Injectable()
export class TeamsEffects {
  getAllTeams$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromTeamsActions.getAllTeams),
      mergeMap((action) =>
        this.teamsService.getTeams().pipe(
          map((data: Team[]) => fromTeamsActions.getAllTeamsSuccess({ data })),
          catchError((error) =>
            of(fromTeamsActions.getAllTeamsFailure({ error }))
          )
        )
      )
    )
  })

  createTeam$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromTeamsActions.createTeam),
      mergeMap((action) =>
        this.teamsService.createNewTeam(action.data.teamName).pipe(
          map((data: Team) => fromTeamsActions.createTeamSuccess({ data })),
          catchError((error) =>
            of(fromTeamsActions.createTeamFailure({ error }))
          )
        )
      )
    )
  })

  constructor(
    private actions$: Actions,
    private readonly teamsService: TeamsService
  ) {}
}
