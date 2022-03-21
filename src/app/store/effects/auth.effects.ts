import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import * as fromAuthActions from '../actions/auth.actions'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { User, UserRole } from 'src/app/models/db/user.model'
import { of } from 'rxjs'
import { Router } from '@angular/router'
import { Action } from '@ngrx/store'
import { LoginService } from 'src/app/views/login/login.service'

@Injectable()
export class AuthEffects {
  authStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.login),
      mergeMap((action) =>
        this.loginService.login(action.data).pipe(
          map((data: User) => fromAuthActions.sendLoginSuccess({ data })),
          catchError((error) => of(fromAuthActions.loginFailure({ error })))
        )
      )
    )
  })

  navigateByRole$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.sendLoginSuccess),
      map((action: { data: User }) => {
        switch (action.data.role) {
          case UserRole.ADMIN:
            this.router.navigateByUrl('/admin/dashboard')
            break
          case UserRole.TEAM_MEMBER:
            break
          default:
            return { type: fromAuthActions.AuthActions.LOGIN_FAILURE }
        }

        return { type: 'NOOP' }
      })
    )
  })

  constructor(
    private readonly actions$: Actions,
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}
}
