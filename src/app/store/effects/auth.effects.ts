import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { LoginService } from 'src/app/login/login.service'
import * as fromAuthActions from '../actions/auth.actions'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { User } from 'src/app/shared/models/db/user.model'
import { of } from 'rxjs'

@Injectable()
export class AuthEffects {
  authStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.login),
      mergeMap((action) =>
        this.loginService.login(action.data).pipe(
          map((data: User) => fromAuthActions.sendLoginStatus({ data })),
          catchError((error) => of(fromAuthActions.loginFailure({ error })))
        )
      )
    )
  })

  constructor(
    private readonly actions$: Actions,
    private readonly loginService: LoginService
  ) {}
}
